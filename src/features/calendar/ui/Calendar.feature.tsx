import { memo, useEffect } from 'react';
import { DayWeek, GridDays, MonthSlider } from './components';
import { CalendarWrapper } from './Сalendar.styles';
import { useCalendar } from '../model/hooks';
import { useWeatherStore } from '../model/stores';
import { Button } from '@mui/material';

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
    isCurrentMonth,
    isToday,
  } = useCalendar();

  const {
    getCurrentWeather,
    clear,
    isLoading,
    getForecastWeather,
    forecastData,
  } = useWeatherStore();

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
      <Button onClick={() => getForecastWeather(14)}>
        Show forecast on 2 weeks
      </Button>
      <DayWeek />
      <GridDays
        weeks={weeks}
        selectedDay={selectedDay}
        isCurrentMonth={isCurrentMonth}
        isToday={isToday}
        toggleDay={toggleDay}
        // TODO: переработать переменную с учетом прогноза и текущей погоды (weatherData)
        forecastData={forecastData}
        isLoading={isLoading}
      />
    </CalendarWrapper>
  );
}

export const CalendarFeature = memo(CalendarFeatureProto);
