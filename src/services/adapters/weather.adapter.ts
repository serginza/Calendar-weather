import type { WeatherDto } from 'services/http';
import type { WeatherEntity } from 'entities/weather';
import { hpaToMmHg, kelvinsToCelsius } from 'shared/constants';

export function weatherAdapter(data: WeatherDto): WeatherEntity {
  return {
    id: data.id,
    temp: kelvinsToCelsius(data.main.temp),
    tempMax: kelvinsToCelsius(data.main.temp_max),
    tempMin: kelvinsToCelsius(data.main.temp_min),
    tempFeels: kelvinsToCelsius(data.main.feels_like),
    pressure: hpaToMmHg(data.main.pressure),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    weather: data.weather,
  };
}
