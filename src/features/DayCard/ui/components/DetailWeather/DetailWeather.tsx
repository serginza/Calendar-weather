import { memo } from 'react';
import type { WeatherType } from 'entities/weather';
import { InfoField, WithSkeleton } from 'shared/ui';
import './DetailWeather.styles.scss';

type DetailWeatherProps = {
  weatherData: WeatherType;
  isLoading: boolean;
};

function DetailWeatherProto({ weatherData, isLoading }: DetailWeatherProps) {
  return (
    <div className="day-weather-container">
      <div>ДАННЫЕ ПОГОДЫ</div>
      <WithSkeleton
        isLoading={isLoading}
        children={
          weatherData ? (
            <>
              <InfoField
                label="Температура"
                value={weatherData.current.temp}
                unit={weatherData.currentUnits.temp}
              />
              <InfoField
                label="Влажность"
                value={weatherData.current.humidity}
                unit={weatherData.currentUnits.humidity}
              />
              <InfoField
                label="Давление"
                value={weatherData.current.pressure}
                unit={weatherData.currentUnits?.pressure}
              />
              <InfoField
                label="Скорость ветра"
                value={weatherData.current.windSpeed}
                unit={weatherData.currentUnits?.windSpeed}
              />
            </>
          ) : (
            // TODO: сделать компонент на отстутствие данных
            <div>Нет данных</div>
          )
        }
      />
    </div>
  );
}

export const DetailWeather = memo(DetailWeatherProto);
