import { memo } from 'react';
import { getWeatherImg } from 'entities/weather';
import type { GridDaysProps } from './GridDays.types';
import './GridDays.style.scss';

function GridDaysProto({
  weeks,
  selectedDay,
  isToday,
  toggleDay,
  weatherData,
  children,
}: GridDaysProps) {
  return weeks.map((week, wIndex) => (
    <div key={wIndex}>
      <div className="day-week-container">
        {week.map((day, index) => {
          const gridIndex = wIndex * 7 + index;

          return (
            <div
              key={gridIndex}
              className={`cell 
                ${isToday(day) ? 'today' : ''} 
                ${gridIndex % 7 === 5 || gridIndex % 7 === 6 ? 'holiday' : ''}
                ${day === selectedDay ? 'selected-day' : ''}`}
              onClick={() => day !== 0 && toggleDay(day)}
            >
              <div>{day !== 0 ? day : ''}</div>
              {isToday(day) && (
                <div className="weather">
                  <img
                    className="cloudness"
                    // TODO: заменить API (с прогнозом) и сделать свои иконки
                    src={getWeatherImg(weatherData?.weather[0].icon)}
                  ></img>
                  <div className="temp">{weatherData?.temp}</div>
                </div>
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
