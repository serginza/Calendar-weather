import { memo } from 'react';
import { Icon, WithSkeleton } from 'shared/ui';
import type { GridDaysProps } from './GridDays.types';
import './GridDays.styles.scss';
import { DayCard } from '../DayCard';
import clsx from 'clsx';

function GridDaysProto({
  weeks,
  selectedDay,
  isCurrentMonth,
  isToday,
  toggleDay,
  forecastData,
  isLoading,
}: GridDaysProps) {
  const renderWeather = (day: number) => {
    const forecast = forecastData?.forecast[day];
    if (!forecast) return null;

    return (
      <div className="weather">
        <Icon
          path={`src/shared/assets/icons/weather/${forecast.iconName}.svg`}
          alt={forecast.iconName}
          width="32px"
          height="32px"
        />
        {isCurrentMonth && (
          <div className="temp">
            {forecast.temMin}...{forecast.temMax}
            {forecastData.units.temp}
          </div>
        )}
      </div>
    );
  };

  const renderDayCell = (day: number, cellIndex: number) => {
    const isHoliday = cellIndex % 7 === 5 || cellIndex % 7 === 6;
    const classes = clsx('cell', {
      today: isToday(day),
      holiday: isHoliday,
      'selected-day': day === selectedDay,
    });

    return (
      <div
        key={cellIndex}
        className={classes}
        onClick={() => day !== 0 && toggleDay(day)}
      >
        <div>{day || ''}</div>
        {day !== 0 && (
          <WithSkeleton isLoading={isLoading}>
            {renderWeather(day)}
          </WithSkeleton>
        )}
      </div>
    );
  };

  return weeks.map((week, wIndex) => (
    <div key={wIndex}>
      <div className="day-week-container">
        {week.map((day, index) => renderDayCell(day, wIndex * 7 + index))}
      </div>

      {week.includes(selectedDay ?? -1) && (
        <DayCard
          weatherData={forecastData?.forecast[selectedDay ?? -1] ?? null}
          weatherUnits={forecastData?.units ?? null}
          isLoading={isLoading}
        />
      )}
    </div>
  ));
}

export const GridDays = memo(GridDaysProto);
