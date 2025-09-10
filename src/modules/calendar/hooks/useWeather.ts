import type { WeatherEntity } from 'entities/weather';
import { useEffect, useState } from 'react';
import { weatherAdapter } from 'services/adapters';
import { fetchWeatherData } from 'services/http';

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherEntity | null>(null);

  useEffect(() => {
    fetchWeatherData().then((data) => {
      console.log('data', weatherAdapter(data));
      return setWeatherData(weatherAdapter(data));
    });
    return () => setWeatherData(null);
  }, []);

  return weatherData;
}
