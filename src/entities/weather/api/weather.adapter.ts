import {
  ADAPTER_NOT_VALUE_TEXTS,
  formatTemp,
  hpaToMmHg,
} from 'shared/constants';
import { isValueExist } from 'shared/helpers';
import type {
  CurrentWeatherDto,
  DailyWeatherDto,
  WeatherDto,
} from '../model/weather.model';
import type {
  CurrentType,
  ForecastType,
  WeatherType,
} from '../model/weather.types';

const FORECAST_KEY_MAP: Record<string, string> = {
  time: 'date',
  weather_code: 'weatherCode',
  temperature_2m_min: 'temMin',
  temperature_2m_max: 'temMax',
  rain_sum: 'rain',
  showers_sum: 'showers',
  snowfall_sum: 'snowfall',
  precipitation_sum: 'prec',
  wind_speed_10m_max: 'windSpeed',
  precipitation_hours: 'precHours',
};

export function weatherAdapter(data: WeatherDto): WeatherType {
  const formatWeather = (weather: CurrentWeatherDto): CurrentType => {
    return {
      temp: weather.temperature_2m
        ? formatTemp(weather.temperature_2m)
        : ADAPTER_NOT_VALUE_TEXTS.DASH,
      windSpeed: weather.wind_speed_10m
        ? Math.round(weather.wind_speed_10m)
        : ADAPTER_NOT_VALUE_TEXTS.DASH,
      pressure: weather.pressure_msl
        ? hpaToMmHg(weather.pressure_msl)
        : ADAPTER_NOT_VALUE_TEXTS.DASH,
      humidity: isValueExist(
        weather.relative_humidity_2m,
        ADAPTER_NOT_VALUE_TEXTS.DASH
      ),
      snowfall: weather.snowfall ?? 0,
      clouds: weather.cloud_cover ?? 0,
      rain: weather.rain ?? 0,
      isDay: !!weather.is_day,
    };
  };

  const formatForecast = (dailyData: DailyWeatherDto) => {
    const forecast: Record<string, Record<string, string | number>> = {};

    (dailyData.time ?? []).forEach((date, index) => {
      const day = new Date(date).getDate().toString();
      const entry: Record<string, string | number> = { date };

      for (const key in dailyData) {
        if (Array.isArray(dailyData[key])) {
          const value =
            typeof dailyData[key][index] === 'number'
              ? Math.round(dailyData[key][index])
              : dailyData[key][index];

          entry[FORECAST_KEY_MAP[key] ?? key] = value;
        }
      }

      forecast[day] = entry;
    });

    return forecast as ForecastType;
  };

  return {
    current: formatWeather(data.current ?? {}),
    currentUnits: {
      temp: isValueExist(data.current_units?.temperature_2m, '°C'),
      humidity: isValueExist(data.current_units?.relative_humidity_2m, '%'),
      precipitation: isValueExist(data.current_units?.precipitation, 'mm'),
      rain: isValueExist(data.current_units?.rain, 'mm'),
      snowfall: isValueExist(data.current_units?.snowfall, 'cm'),
      clouds: isValueExist(data.current_units?.cloud_cover, '%'),
      pressure: 'mm Hg',
      windSpeed: isValueExist(data.current_units?.wind_speed_10m, 'km/h'),
      windDirection: isValueExist(data.current_units?.wind_direction_10m, '°'),
      windGusts: isValueExist(data.current_units?.wind_gusts_10m, 'km/h'),
    },

    forecast: formatForecast(data.daily ?? {}),
  };
}
