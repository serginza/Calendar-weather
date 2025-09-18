import { memo } from 'react';
import type { WeatherType } from 'entities/weather';
import { DetailWeather } from './components/DetailWeather';
import { DayTasks } from './components/DayTasks';
import { DayCardWrapper } from './DayCard.styles';

type DayCardPrors = { weatherData: WeatherType; isLoading: boolean };

function DayCardProto({ weatherData, isLoading }: DayCardPrors) {
  return (
    <DayCardWrapper>
      <DayTasks />
      <DetailWeather weatherData={weatherData} isLoading={isLoading} />
    </DayCardWrapper>
  );
}

export const DayCard = memo(DayCardProto);
