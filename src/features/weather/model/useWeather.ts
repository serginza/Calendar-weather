import { useEffect, useState } from 'react';
import {
  fetchWeatherData,
  weatherAdapter,
  type WeatherType,
} from 'entities/weather';

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchWeatherData()
      .then((data) => {
        console.log('data', weatherAdapter(data));
        return setWeatherData(weatherAdapter(data));
      })
      .finally(() => setIsLoading(false));
    return () => setWeatherData(null);
  }, []);
  return { weatherData, isLoading };
}
