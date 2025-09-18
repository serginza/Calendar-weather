export type CurrentType = {
  temp: string | number;
  windSpeed: string | number;
  pressure: string | number;
  humidity: string | number;
  snowfall: number;
  clouds: number;
  rain: number;
  isDay: boolean;
};

export type UnitsType = {
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

export type ForecastDayDto = {
  date: string;
  weatherCode: number;
  temMin: number;
  temMax: number;
  rain: number;
  showers: number;
  snowfall: number;
  prec: number;
  windSpeed: number;
  precHours: number;
};

export type ForecastType = Record<string, ForecastDayDto>;

export type WeatherType = {
  current: CurrentType;
  currentUnits: UnitsType;
  forecast: ForecastType;
} | null;

export type WeatherParams = Omit<
  CurrentType,
  'temp' | 'windSpeed' | 'pressure' | 'humidity'
>;
