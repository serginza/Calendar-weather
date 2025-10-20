import { createContext, useContext, type JSX } from 'react';
import { useCalendar } from './useCalendar';

interface CalendarContextProps {
  year: number;
  month: number;
  weeks: number[][];
  selectedDay: number | null;
  prevMonth: () => void;
  nextMonth: () => void;
  toggleDay: (day: number) => void;
  isToday: (day: number) => boolean;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

export const CalendarProvider = ({ children }: { children: JSX.Element }) => {
  const calendarData = useCalendar();

  return (
    <CalendarContext.Provider value={calendarData}>
      {children}
    </CalendarContext.Provider>
  );
};

// TODO: 1 - проверить hot-refresh и отработку, 2 - перенести в отдельный файл-хук?
// eslint-disable-next-line react-refresh/only-export-components
export const useCalendarContext = () => {
  const ctx = useContext(CalendarContext);
  if (!ctx) {
    throw new Error('useCalendarContext must be used within CalendarProvider');
  }
  return ctx;
};
