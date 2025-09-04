import { useCallback, useState } from 'react';
import { fetchWeatherData } from 'services/http';

export function useCalendar() {
  // TODO: side-effect на GET, state, ts
  fetchWeatherData().then((data) => console.log('data', data));

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const cells: number[] = [
    ...Array(offset).fill(0),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const prevMonth = useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }, [month, year]);

  const nextMonth = useCallback(() => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }, [month, year]);

  const isToday = (day: number) =>
    currentYear === year && currentMonth === month && day === currentDay;

  const holidayStyle = (index: number) =>
    index % 7 === 5 || index % 7 === 6 ? 'calendar__cell--holiday' : '';

  return { year, month, cells, prevMonth, nextMonth, isToday, holidayStyle };
}
