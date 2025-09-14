import type { WeatherType } from '../../../entities/weather/model/weather.types';

export type CalendarProps = {
  year: number;
  month: number;
  weeks: number[][];
  selectedDay: number | null;
  prevMonth: () => void;
  nextMonth: () => void;
  toggleDay: (day: number) => void;
  isToday: (day: number) => boolean;
  holidayStyle: (index: number) => 'calendar__cell--holiday' | '';
  weatherData: WeatherType | null;
};
