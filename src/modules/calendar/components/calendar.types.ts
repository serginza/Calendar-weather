import type { WeatherEntity } from 'entities/weather';

export type CalendarProps = {
  year: number;
  month: number;
  cells: number[];
  selectedDay: number | null;
  prevMonth: () => void;
  nextMonth: () => void;
  toggleDay: (day: number) => void;
  isToday: (day: number) => boolean;
  holidayStyle: (index: number) => 'calendar__cell--holiday' | '';
  weatherData: WeatherEntity | null;
};
