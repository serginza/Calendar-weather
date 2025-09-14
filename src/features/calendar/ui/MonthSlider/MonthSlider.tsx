import { memo } from 'react';
import { MONTHS } from 'shared/constants';
import type { MonthSliderProps } from './MonthSlider.types';
import './MonthSlider.style.scss';

function MonthSliderProto({
  month,
  year,
  prevMonth,
  nextMonth,
}: MonthSliderProps) {
  return (
    <section className="slider-container">
      <button type="button" onClick={prevMonth} className="arrow">
        {/* TODO: стрелки-иконки */}
        {'<<'}
      </button>
      <div className="title">
        <div className="month">{MONTHS[month]}</div>
        <div className="year">{year}</div>
      </div>

      <button type="button" onClick={nextMonth} className="arrow">
        {'>>'}
      </button>
    </section>
  );
}

export const MonthSlider = memo(MonthSliderProto);
