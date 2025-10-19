import { createContext, useContext, type JSX } from 'react';
import { useWeather } from 'features/calendar';
import type { CurrentType } from 'entities/weather';

interface WeatherContextProps {
  weatherData: CurrentType;
  isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextProps | null>(null);

export const WeatherProvider = ({ children }: { children: JSX.Element }) => {
  const weatherData = useWeather();

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};

// TODO: 1 - проверить hot-refresh и отработку, 2 - перенести в отдельный файл-хук?, 3 - пересмотерть слой
// eslint-disable-next-line react-refresh/only-export-components
export const useWeatherContext = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx) {
    throw new Error('useWeatherContext must be used within WeatherProvider');
  }
  return ctx;
};
