import type { CurrentType, ForecastType } from 'entities/weather';
import { weatherAdapter } from './weather.adapter';
import { weatherAgent } from './weather.agent';

export const weatherService = {
  getForecast: async (dayNumbers: number): Promise<ForecastType | null> => {
    try {
      const { data } = await weatherAgent.getForecastWeather(dayNumbers);

      return weatherAdapter.forecastWeather(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching forecast weather data: ', err);
      }
      return null;
    }
  },

  getCurrent: async (): Promise<CurrentType | null> => {
    try {
      const { data } = await weatherAgent.getCurrentWeather();

      return weatherAdapter.currentWeather(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching current weather data: ', err);
      }
      return null;
    }
  },
};
