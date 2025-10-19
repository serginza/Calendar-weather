import { memo } from 'react';
import type { CurrentType } from 'entities/weather';
import { DetailWeather } from './components/DetailWeather';
import { DayTasks } from './components/DayTasks';
import { DayCardWrapper } from './DayCard.styles';

type DayCardPrors = {
  // TODO: изменить тип под прогноз и подробную погоду на день, т.е. нужен тип данных на один день
  weatherData: CurrentType;
  isLoading: boolean;
};

function DayCardProto({ weatherData, isLoading }: DayCardPrors) {
  return (
    <DayCardWrapper>
      <DayTasks />
      {weatherData && (
        <DetailWeather
          weatherData={weatherData.current}
          weatherUnits={weatherData.units}
          isLoading={isLoading}
        />
      )}
    </DayCardWrapper>
  );
}

export const DayCard = memo(DayCardProto);
