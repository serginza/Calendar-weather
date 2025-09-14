import { useEffect, useState } from 'react';
import {
  fetchWeatherData,
  weatherAdapter,
  type WeatherType,
} from 'entities/weather';

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);

  useEffect(() => {
    fetchWeatherData().then((data) => {
      console.log('data', weatherAdapter(data));
      return setWeatherData(weatherAdapter(data));
    });
    return () => setWeatherData(null);
  }, []);

  return weatherData;
}
