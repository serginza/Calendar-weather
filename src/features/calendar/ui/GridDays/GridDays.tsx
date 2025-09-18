import { memo } from 'react';
import type { GridDaysProps } from './GridDays.types';
import './GridDays.styles.scss';
import { WithSkeleton } from 'shared/ui';
import { WeatherIcon } from 'entities/weather';

function GridDaysProto({
  weeks,
  selectedDay,
  isToday,
  toggleDay,
  weatherData,
  isLoading,
  children,
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
                        <WeatherIcon
                          snowfall={weatherData.current.snowfall}
                          clouds={weatherData.current.clouds}
                          rain={weatherData.current.rain}
                          isDay={weatherData.current.isDay}
                        />
                        <div className="temp">
                          {weatherData?.current.temp + '°C'}
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

      {week.includes(selectedDay ?? -1) && children}
    </div>
  ));
}

export const GridDays = memo(GridDaysProto);
