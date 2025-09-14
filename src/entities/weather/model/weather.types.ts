export type WeatherType = {
  id: number;
  temp: string;
  tempMax: string;
  tempMin: string;
  tempFeels: string;
  pressure: number | string;
  humidity: number | string;
  windSpeed: number | string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};
