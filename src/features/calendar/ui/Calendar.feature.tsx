import { memo, useEffect } from 'react';
import { DayWeek, GridDays, MonthSlider } from './components';
import { CalendarWrapper } from './Сalendar.styles';
import { useCalendar } from '../model/hooks';
import { useWeatherStore } from '../model/stores';

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

  const { getCurrentWeather, currentData, clear, isLoading } =
    useWeatherStore();

  useEffect(() => {
    getCurrentWeather();
    return () => clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        // TODO: переработать переменную с учетом прогноза
        weatherData={currentData}
        isLoading={isLoading}
      />
    </CalendarWrapper>
  );
}

export const CalendarFeature = memo(CalendarFeatureProto);
