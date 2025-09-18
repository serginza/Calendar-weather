import type { WeatherParams } from '../model';

type Intensity = 'light' | 'medium' | 'heavy';

// TODO: в будущем проанализировать перенос в фичу weather
export function getWeatherIconName(params: WeatherParams): string {
  const { clouds, rain, snowfall, isDay } = params;
  const time = isDay ? 'day' : 'night';

  const getIntensity = (value: number): Intensity | null => {
    if (value > 10) return 'heavy';
    if (value > 2) return 'medium';
    if (value > 0) return 'light';
    return null;
  };

  const pickStronger = (a: Intensity, b: Intensity): Intensity | null => {
    const order: Intensity[] = ['light', 'medium', 'heavy'];
    return order[Math.max(order.indexOf(a), order.indexOf(b))];
  };

  const rainLevel = getIntensity(rain);
  const snowLevel = getIntensity(snowfall);

  if (rainLevel && snowLevel) {
    const level = pickStronger(rainLevel, snowLevel);
    return `rain-snow-${level}`;
  }
  if (snowLevel) return `snow-${snowLevel}`;
  if (rainLevel) return `rain-${rainLevel}`;
  if (clouds < 20) return `clear-${time}`;
  if (clouds < 50) return `partly-cloudy-${time}`;

  return `cloudy`;
}
