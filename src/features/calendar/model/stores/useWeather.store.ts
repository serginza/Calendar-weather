import { create } from 'zustand';
import type { CurrentType, ForecastType } from 'entities/weather';
import { weatherService } from 'infrastructure/weather';

type WeatherStoreType = {
  currentData: CurrentType | null;
  forecastData: ForecastType | null;
  isLoading: boolean;
  getCurrentWeather: () => void;
  getForecastWeather: (dayNumbers: number) => void;
  clear: () => void;
};

export const useWeatherStore = create<WeatherStoreType>((set) => ({
  currentData: null,
  forecastData: null,
  isLoading: false,

  getCurrentWeather: async () => {
    set({ isLoading: true });
    try {
      const data = await weatherService.getCurrent();
      console.log('currentData', data);
      set({ currentData: data });
    } finally {
      set({ isLoading: false });
    }
  },
  getForecastWeather: async (dayNumbers = 14) => {
    set({ isLoading: true });
    try {
      const data = await weatherService.getForecast(dayNumbers);
      console.log('forecastData', data);
      set({ forecastData: data });
    } finally {
      set({ isLoading: false });
    }
  },
  clear: () => {
    set({ currentData: null, forecastData: null });
  },
}));
