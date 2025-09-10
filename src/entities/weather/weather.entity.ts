export type WeatherEntity = {
  id: number;
  temp: string;
  tempMax: string;
  tempMin: string;
  tempFeels: string;
  pressure: number;
  humidity: number;
  windSpeed: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};
