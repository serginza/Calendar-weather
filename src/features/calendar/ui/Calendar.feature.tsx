import { memo } from 'react';
import { CalendarWrapper } from './Сalendar.styles';
import { MonthSlider } from './MonthSlider';
import { DayWeek } from './DayWeek';
import { GridDays } from './GridDays';
import { useCalendar, useWeather } from '../model';

function CalendarFeatureProto() {
  // TODO: передавать пропсы контекстом
  const {
    year,
    month,
    weeks,
    selectedDay,
    prevMonth,
    nextMonth,
    toggleDay,
    isToday,
  } = useCalendar();

  // TODO: передавать пропсы контекстом
  const { weatherData, isLoading } = useWeather();

  return (
    <CalendarWrapper>
      <MonthSlider
        month={month}
        year={year}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <DayWeek />
      <GridDays
        weeks={weeks}
        selectedDay={selectedDay}
        isToday={isToday}
        toggleDay={toggleDay}
        weatherData={weatherData}
        isLoading={isLoading}
      />
    </CalendarWrapper>
  );
}

export const CalendarFeature = memo(CalendarFeatureProto);
