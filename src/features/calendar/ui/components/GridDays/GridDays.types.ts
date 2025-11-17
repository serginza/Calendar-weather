import type { ForecastType } from 'entities/weather';

export type GridDaysProps = {
  weeks: number[][];
  selectedDay: number | null;
  isCurrentMonth: boolean;
  isToday: (day: number) => boolean;
  toggleDay: (day: number) => void;
  forecastData: ForecastType;
  isLoading: boolean;
};
