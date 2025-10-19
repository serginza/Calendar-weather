import { useEffect, useState } from 'react';
import { weatherService } from 'infrastructure/weather';
import type { CurrentType } from 'entities/weather';

export function useWeather() {
  const [weatherData, setWeatherData] = useState<CurrentType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    weatherService
      .getCurrent()
      .then((data) => {
        console.log('data', data);
        return setWeatherData(data);
      })
      .finally(() => setIsLoading(false));
    return () => setWeatherData(null);
  }, []);
  return { weatherData, isLoading };
}
