import { memo } from 'react';
import type { ForecastDayType, ForecastUnitsType } from 'entities/weather';
import { DetailWeather } from './components/DetailWeather';
import { DayTasks } from './components/DayTasks';
import { DayCardWrapper } from './DayCard.styles';

type DayCardPrors = {
  // TODO: изменить тип под прогноз и подробную погоду на день, т.е. нужен тип данных на один день
  weatherData: ForecastDayType | null;
  weatherUnits: ForecastUnitsType | null;
  isLoading: boolean;
};

function DayCardProto({ weatherData, weatherUnits, isLoading }: DayCardPrors) {
  return (
    <DayCardWrapper>
      <DayTasks />
      {weatherData && weatherUnits && (
        <DetailWeather
          weatherData={weatherData}
          weatherUnits={weatherUnits}
          isLoading={isLoading}
        />
      )}
    </DayCardWrapper>
  );
}

export const DayCard = memo(DayCardProto);
