import type { CurrentType } from 'entities/weather';

export type GridDaysProps = {
  weeks: number[][];
  selectedDay: number | null;
  isToday: (day: number) => boolean;
  toggleDay: (day: number) => void;
  weatherData: CurrentType;
  isLoading: boolean;
};
