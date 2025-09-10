import { memo } from 'react';
import { getWeatherImg } from 'services/http/agents';
import { MONTHS, WEEK_DAYS } from 'shared/constants';
import type { CalendarProps } from './calendar.types';
import './calendar.style.scss';

function CalendarProto({
  year,
  month,
  cells,
  // selectedDay,
  prevMonth,
  nextMonth,
  // toggleDay,
  isToday,
  holidayStyle,
  weatherData,
}: CalendarProps) {
  return (
    <div className="calendar">
      <section className="calendar__slider">
        <button type="button" onClick={prevMonth} className="calendar__arrow">
          {/* TODO: стрелки-иконки */}
          {'<<'}
        </button>
        <div className="calendar__title">
          <div className="calendar__month">{MONTHS[month]}</div>
          <div className="calendar__year">{year}</div>
        </div>

        <button type="button" onClick={nextMonth} className="calendar__arrow">
          {'>>'}
        </button>
      </section>

      <section className="calendar__grid">
        {WEEK_DAYS.map((day, index) => (
          <div className={`calendar__weekday ${holidayStyle(index)}`} key={day}>
            {day}
          </div>
        ))}
      </section>

      {/* TODO: вынести и добавить accordeon со списком дел */}
      <section className="calendar__grid">
        {cells.map((day, index) => (
          <div
            className={`calendar__cell 
              ${isToday(day) ? 'calendar__cell--today' : ''} 
              ${holidayStyle(index)}`}
            key={index}
          >
            <div>{day !== 0 ? day : ''}</div>
            {isToday(day) && (
              <div className="calendar__weather">
                <img
                  className="calendar__weather--cloudness"
                  src={getWeatherImg(weatherData?.weather[0].icon)}
                ></img>
                <div className="calendar__weather--temp">
                  {weatherData?.temp}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export const Calendar = memo(CalendarProto);
