import type { WeatherType } from 'entities/weather';

export type GridDaysProps = {
  // TODO: нужны проверки на отсутсвие значений до вызова в фичах, избавиться от null
  weeks: number[][];
  selectedDay: number | null;
  isToday: (day: number) => boolean;
  toggleDay: (day: number) => void;
  weatherData: WeatherType | null;
  children: React.ReactNode;
};
