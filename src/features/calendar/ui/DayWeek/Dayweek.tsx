import { memo } from 'react';
import { WEEK_DAYS } from 'shared/constants';
import './DayWeek.style.scss';

function DayWeekProto() {
  return (
    <section className="day-week-container">
      {WEEK_DAYS.map((day, index) => (
        <div
          className={`day-week ${index % 7 === 5 || index % 7 === 6 ? 'holiday' : ''}`}
          key={day}
        >
          {day}
        </div>
      ))}
    </section>
  );
}

export const DayWeek = memo(DayWeekProto);
