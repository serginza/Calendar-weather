import { memo } from 'react';
import { Icon, WithSkeleton } from 'shared/ui';
import type { GridDaysProps } from './GridDays.types';
import './GridDays.styles.scss';
import { DayCard } from '../DayCard';

function GridDaysProto({
  weeks,
  selectedDay,
  isToday,
  toggleDay,
  weatherData,
  isLoading,
}: GridDaysProps) {
  return weeks.map((week, wIndex) => (
    <div key={wIndex}>
      <div className="day-week-container">
        {week.map((day, index) => {
          const cellIndex = wIndex * 7 + index;

          return (
            <div
              key={cellIndex}
              // TODO: вынести логику стилистики в стили или в хук
              className={`cell 
                ${isToday(day) ? 'today' : ''} 
                ${cellIndex % 7 === 5 || cellIndex % 7 === 6 ? 'holiday' : ''}
                ${day === selectedDay ? 'selected-day' : ''}`}
              onClick={() => day !== 0 && toggleDay(day)}
            >
              <div>{day !== 0 ? day : ''}</div>
              {isToday(day) && (
                <WithSkeleton
                  isLoading={isLoading}
                  children={
                    weatherData && (
                      <div className="weather">
                        <Icon
                          path={`src/shared/assets/icons/weather/${weatherData.current.iconName}.svg`}
                          alt={weatherData.current.iconName}
                          width={'32px'}
                          height={'32px'}
                        />
                        <div className="temp">
                          {weatherData?.current.temp + weatherData.units.temp}
                        </div>
                      </div>
                    )
                  }
                />
              )}
            </div>
          );
        })}
      </div>

      {week.includes(selectedDay ?? -1) && (
        <DayCard weatherData={weatherData} isLoading={isLoading} />
      )}
    </div>
  ));
}

export const GridDays = memo(GridDaysProto);
