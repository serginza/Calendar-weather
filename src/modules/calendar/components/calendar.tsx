import { memo } from 'react';
import { MONTHS, WEEK_DAYS } from 'shared/constants';
import './calendar.style.scss';

// TODO: вынести
type CalendarProps = {
  year: number;
  month: number;
  cells: number[];
  prevMonth: () => void;
  nextMonth: () => void;
  isToday: (day: number) => boolean;
  holidayStyle: (index: number) => 'calendar__cell--holiday' | '';
};

function CalendarProto({
  year,
  month,
  cells,
  prevMonth,
  nextMonth,
  isToday,
  holidayStyle,
}: CalendarProps) {
  return (
    <div className="calendar">
      <section className="calendar__slider">
        <button type="button" onClick={prevMonth} className="calendar__arrow">
          {/* TODO: стрелки-иконки */}
          {'<<'}
        </button>
        <div className="calendar__title">
          <div className="calendar__month">{MONTHS[month].toUpperCase()}</div>
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

      <section className="calendar__grid">
        {cells.map((day, index) => (
          <div
            className={`calendar__cell 
              ${isToday(day) ? 'calendar__cell--today' : ''} 
              ${holidayStyle(index)}`}
            key={index}
          >
            {day !== 0 ? day : ''}
          </div>
        ))}
      </section>
    </div>
  );
}

export const Calendar = memo(CalendarProto);
