import { memo } from 'react';
import { Checkbox } from '@mui/material';
import './DayTasks.styles.scss';

// type DayTasksPrors = {};

function DayTasksProto() {
  return (
    <div className="day-tasks-container">
      <div>СПИСОК ДЕЛ</div>
      <div className="task">
        <Checkbox></Checkbox>
        <div className="task-name">{'Todo1'}</div>
        <button type="button">Edit</button>
        <button type="button">Del</button>
      </div>
      <div className="task">
        <Checkbox></Checkbox>
        <div className="task-name">{'Todo2'}</div>
        <button type="button">Edit</button>
        <button type="button">Del</button>
      </div>
      <div className="task">
        <Checkbox></Checkbox>
        <div className="task-name">{'Todo3'}</div>
        <button type="button">Edit</button>
        <button type="button">Del</button>
      </div>
    </div>
  );
}

export const DayTasks = memo(DayTasksProto);
