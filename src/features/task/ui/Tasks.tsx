import { memo } from 'react';
import { InfoField } from 'shared/ui';
import './Tasks.style.scss';

function TasksProto({ weatherData }) {
  return (
    <div className="details">
      <div className="details-weather">
        <div>СПИСОК ДЕЛ</div>
        <div>туду</div>
        <div>туду</div>
        <div>туду</div>
      </div>
      <div className="details-task">
        <div>ДАННЫЕ ПОГОДЫ</div>
        {/* TODO: сделать defaultValues на новом API */}
        <InfoField label="Влажность, %" value={weatherData?.humidity ?? '-'} />
        <InfoField
          label="Давление, мм рт.ст."
          value={weatherData?.pressure ?? '-'}
        />
        <InfoField
          label="Скорость ветра, м/с"
          value={weatherData?.windSpeed ?? '-'}
        />
        <InfoField
          label="Температура (max)"
          value={weatherData?.tempMax ?? '-'}
        />
        <InfoField
          label="Температура (min)"
          value={weatherData?.tempMin ?? '-'}
        />
        <InfoField
          label="Температура (ощущается)"
          value={weatherData?.tempFeels ?? '-'}
        />
      </div>
    </div>
  );
}

export const Tasks = memo(TasksProto);
