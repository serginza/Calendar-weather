import { memo } from 'react';
import './DayTasks.styles.scss';

// type DayTasksPrors = {};

function DayTasksProto() {
  return (
    <div className="day-tasks-container">
      <div>СПИСОК ДЕЛ</div>
      <div>туду</div>
      <div>туду</div>
      <div>туду</div>
    </div>
  );
}

export const DayTasks = memo(DayTasksProto);
