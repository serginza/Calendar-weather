import { memo } from 'react';
import type { ForecastDayType, ForecastUnitsType } from 'entities/weather';
import { Icon, InfoField, WithSkeleton } from 'shared/ui';
import './DetailWeather.styles.scss';

type DetailWeatherProps = {
  weatherData: ForecastDayType;
  weatherUnits: ForecastUnitsType;
  isLoading: boolean;
};

function DetailWeatherProto({
  weatherData,
  weatherUnits,
  isLoading,
}: DetailWeatherProps) {
  return (
    <div className="day-weather-container">
      <div>ДАННЫЕ ПОГОДЫ</div>
      <WithSkeleton
        isLoading={isLoading}
        children={
          weatherData ? (
            <div className="detail-weather-container">
              <div className="common-details">
                <Icon
                  path={`src/shared/assets/icons/weather/${weatherData.iconName}.svg`}
                  alt={weatherData.iconName}
                  width={'64px'}
                  height={'64px'}
                />
                <div>{weatherData.temp + '°'}</div>
              </div>

              <InfoField
                label="Влажность"
                value={weatherData.humidity}
                unit={weatherUnits.humidity}
                style={{ fontSize: '1rem' }}
              />
              <InfoField
                label="Давление"
                value={weatherData.pressure}
                unit={weatherUnits.pressure}
                style={{ fontSize: '1rem' }}
              />
              <InfoField
                label="Скорость ветра"
                value={weatherData.windSpeed}
                unit={weatherUnits.windSpeed}
                style={{ fontSize: '1rem' }}
              />
            </div>
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
