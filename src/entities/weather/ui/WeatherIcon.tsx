import type { JSX } from 'react';
import { Icon } from 'shared/ui';
import type { WeatherParams } from '../model';
import { getWeatherIconName } from '../lib';

export function WeatherIcon({ ...params }: WeatherParams): JSX.Element {
  const iconName = getWeatherIconName(params);
  return (
    <Icon
      path={`src/shared/assets/icons/weather/${iconName}.svg`}
      alt={iconName}
      width={'32px'}
      height={'32px'}
    />
  );
}
