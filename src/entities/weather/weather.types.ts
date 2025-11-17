export type CurrentWeatherType = {
  temp: string | number;
  windSpeed: string | number;
  pressure: string | number;
  humidity: string | number;
  snowfall: number;
  clouds: number;
  rain: number;
  isDay: boolean;
  iconName: string;
};

export type CurrentUnitsType = {
  temp: string;
  humidity: string;
  precipitation: string;
  rain: string;
  snowfall: string;
  clouds: string;
  pressure: string;
  windSpeed: string;
  windDirection: string;
  windGusts: string;
};

export type ForecastDayType = {
  iconName: string;
  clouds: number;
  date: string;
  weatherCode: number;
  humidity: string;
  pressure: string;
  temp: number | string;
  temMin: number | string;
  temMax: number | string;
  rain: number;
  showers: number;
  snowfall: number;
  precipitation: number;
  precipitationHours: number;
  windSpeed: number;
  windGusts: number;
  windDirection: number;
};

export type ForecastWeatherType = Record<string, ForecastDayType>;

export type ForecastUnitsType = {
  temp: string;
  humidity: string;
  pressure: string;
  precipitation: string;
  precipitationHours: string;
  rain: string;
  snowfall: string;
  showers: string;
  windSpeed: string;
  windDirection: string;
  windGusts: string;
};

export type CurrentType = {
  current: CurrentWeatherType;
  units: CurrentUnitsType;
} | null;

export type ForecastType = {
  units: ForecastUnitsType;
  forecast: ForecastWeatherType;
} | null;

export type WeatherParams = Pick<
  CurrentWeatherType,
  'snowfall' | 'clouds' | 'rain' | 'isDay'
>;
