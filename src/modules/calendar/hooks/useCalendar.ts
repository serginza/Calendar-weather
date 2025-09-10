import { useCallback, useState } from 'react';

export function useCalendar() {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const cells: number[] = [
    ...Array(offset).fill(0),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // TODO: заменить cells на [[week1], [week2]...]
  // const days = Array.from({ length: offset + daysInMonth }, (_, i) =>
  //   i < offset ? 0 : i - offset + 1
  // );

  // const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, i) =>
  //   days.slice(i * 7, (i + 1) * 7)
  // );

  const toggleDay = (day: number) => {
    setSelectedDay((prev) => (prev === day ? null : day));
  };

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

  return {
    year,
    month,
    cells,
    selectedDay,
    prevMonth,
    nextMonth,
    toggleDay,
    isToday,
    holidayStyle,
  };
}
