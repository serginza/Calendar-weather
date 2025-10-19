import type {
  CurrentType,
  CurrentWeatherType,
  ForecastType,
  ForecastWeatherType,
  WeatherParams,
} from 'entities/weather';
import {
  ADAPTER_NOT_VALUE_TEXTS,
  formatTemp,
  hpaToMmHg,
} from 'shared/constants';
import { isValueExist } from 'shared/helpers';
import type {
  CurrentDto,
  CurrentUnitsDto,
  CurrentWeatherDto,
  DailyWeatherDto,
  ForecastDto,
  UnitsDailyDto,
} from '../model/weather.model';

type IntensityType = 'light' | 'medium' | 'heavy';

const FORECAST_KEY_MAP: Record<string, string> = {
  time: 'date',
  weather_code: 'weatherCode',
  temperature_2m_min: 'temMin',
  temperature_2m_max: 'temMax',
  rain_sum: 'rain',
  showers_sum: 'showers',
  snowfall_sum: 'snowfall',
  precipitation_sum: 'precipitation',
  precipitation_hours: 'precipitationHours',
  wind_speed_10m_max: 'windSpeed',
  wind_gusts_10m_max: 'windGusts',
  wind_direction_10m_dominant: 'windDirection',
};

const getWeatherIconName = (params: WeatherParams): string => {
  const { clouds, rain, snowfall, isDay } = params;
  const time = isDay ? 'day' : 'night';

  const getIntensity = (value: number): IntensityType | null => {
    if (value > 10) return 'heavy';
    if (value > 2) return 'medium';
    if (value > 0) return 'light';
    return null;
  };

  const pickStronger = (
    a: IntensityType,
    b: IntensityType
  ): IntensityType | null => {
    const order: IntensityType[] = ['light', 'medium', 'heavy'];
    return order[Math.max(order.indexOf(a), order.indexOf(b))];
  };

  const rainLevel = getIntensity(rain);
  const snowLevel = getIntensity(snowfall);

  if (rainLevel && snowLevel) {
    const level = pickStronger(rainLevel, snowLevel);
    return `rain-snow-${level}`;
  }
  if (snowLevel) return `snow-${snowLevel}`;
  if (rainLevel) return `rain-${rainLevel}`;
  if (clouds < 20) return `clear-${time}`;
  if (clouds < 50) return `partly-cloudy-${time}`;

  return `cloudy`;
};

export const weatherAdapter = {
  currentWeather: (data: CurrentDto): CurrentType => {
    const formatCurrent = (weather: CurrentWeatherDto): CurrentWeatherType => {
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
        iconName: getWeatherIconName({
          snowfall: data.current?.snowfall ?? 0,
          clouds: data.current?.cloud_cover ?? 0,
          rain: data.current?.rain ?? 0,
          isDay: !!data.current?.is_day,
        }),
      };
    };

    const formatUnits = (units: CurrentUnitsDto) => {
      return {
        temp: isValueExist(units.temperature_2m, '°C'),
        humidity: isValueExist(units.relative_humidity_2m, '%'),
        precipitation: isValueExist(units.precipitation, 'mm'),
        rain: isValueExist(units.rain, 'mm'),
        snowfall: isValueExist(units.snowfall, 'cm'),
        clouds: isValueExist(units.cloud_cover, '%'),
        pressure: 'mm Hg',
        windSpeed: isValueExist(units.wind_speed_10m, 'km/h'),
        windDirection: isValueExist(units.wind_direction_10m, '°'),
        windGusts: isValueExist(units.wind_gusts_10m, 'km/h'),
      };
    };

    return {
      current: formatCurrent(data.current ?? {}),
      units: formatUnits(data.current_units ?? {}),
    };
  },

  forecastWeather: (data: ForecastDto): ForecastType => {
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

      return forecast as ForecastWeatherType;
    };

    const formatUnits = (units: UnitsDailyDto) => {
      return {
        temp: isValueExist(units.temperature_2m_min, '°C'),
        precipitation: isValueExist(units.precipitation_sum, 'mm'),
        precipitationHours: isValueExist(units.precipitation_hours, 'h'),
        rain: isValueExist(units.rain_sum, 'mm'),
        snowfall: isValueExist(units.snowfall_sum, 'cm'),
        showers: isValueExist(units.showers_sum, 'mm'),
        windSpeed: isValueExist(units.wind_speed_10m_max, 'km/h'),
        windGusts: isValueExist(units.wind_gusts_10m_max, 'km/h'),
        windDirection: isValueExist(units.wind_direction_10m_dominant, '°'),
      };
    };

    return {
      forecast: formatForecast(data.daily ?? {}),
      units: formatUnits(data.daily_units ?? {}),
    };
  },
};
