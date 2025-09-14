import { memo } from 'react';
import { DayWeek, GridDays, MonthSlider, useCalendar } from 'features/calendar';
import { useWeather } from 'features/weather';
import { CalendarWrapper } from './calendar.style';
import { Tasks } from 'features/task';

function CalendarProto() {
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

  const weatherData = useWeather();
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
      >
        <Tasks weatherData={weatherData} />
      </GridDays>
    </CalendarWrapper>
  );
}

export const Calendar = memo(CalendarProto);
