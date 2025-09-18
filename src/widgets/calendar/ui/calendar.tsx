import { memo } from 'react';
import { DayWeek, GridDays, MonthSlider, useCalendar } from 'features/calendar';
import { useWeather } from 'features/weather';
import { DayCard } from 'features/DayCard';
import { CalendarWrapper } from './calendar.styles';

function CalendarProto() {
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
      >
        <DayCard weatherData={weatherData} isLoading={isLoading} />
      </GridDays>
    </CalendarWrapper>
  );
}

export const Calendar = memo(CalendarProto);
