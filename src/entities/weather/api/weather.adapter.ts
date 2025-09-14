import {
  ADAPTER_NOT_VALUE_TEXTS,
  hpaToMmHg,
  kelvinsToCelsius,
} from 'shared/constants';
import { isValueExist } from 'shared/helpers';
import type { WeatherDto } from '../model/weather.model';
import type { WeatherType } from '../model/weather.types';

export function weatherAdapter(data: WeatherDto): WeatherType {
  return {
    id: data.id,
    temp: data.main.temp
      ? kelvinsToCelsius(data.main.temp)
      : ADAPTER_NOT_VALUE_TEXTS.DASH,
    tempMax: data.main.temp_max
      ? kelvinsToCelsius(data.main.temp_max)
      : ADAPTER_NOT_VALUE_TEXTS.DASH,
    tempMin: data.main.temp_min
      ? kelvinsToCelsius(data.main.temp_min)
      : ADAPTER_NOT_VALUE_TEXTS.DASH,
    tempFeels: data.main.feels_like
      ? kelvinsToCelsius(data.main.feels_like)
      : ADAPTER_NOT_VALUE_TEXTS.DASH,
    pressure: data.main.pressure
      ? hpaToMmHg(data.main.pressure)
      : ADAPTER_NOT_VALUE_TEXTS.DASH,
    humidity: isValueExist(data.main.humidity, ADAPTER_NOT_VALUE_TEXTS.DASH),
    windSpeed: isValueExist(data.wind.speed, ADAPTER_NOT_VALUE_TEXTS.DASH),
    // TODO: распарсить массив
    weather: data.weather ?? [],
  };
}
