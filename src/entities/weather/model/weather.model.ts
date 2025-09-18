type UnitsDto = {
  time?: string;
  interval?: string;
  temperature_2m?: string;
  relative_humidity_2m?: string;
  apparent_temperature?: string;
  is_day?: string;
  precipitation?: string;
  rain?: string;
  snowfall?: string;
  cloud_cover?: string;
  pressure_msl?: string;
  wind_speed_10m?: string;
  wind_direction_10m?: string;
  wind_gusts_10m?: string;
};

export type CurrentWeatherDto = {
  time?: string;
  interval?: number;
  temperature_2m?: number;
  relative_humidity_2m?: number;
  apparent_temperature?: number;
  is_day?: number;
  precipitation?: number;
  rain?: number;
  snowfall?: number;
  cloud_cover?: number;
  pressure_msl?: number;
  wind_speed_10m?: number;
  wind_direction_10m?: number;
  wind_gusts_10m?: number;
};

type UnitsHourlyDto = {
  time?: string;
  temperature_2m?: string;
  relative_humidity_2m?: string;
  apparent_temperature?: string;
  precipitation?: string;
  rain?: string;
  snowfall?: string;
  precipitation_probability?: string;
  pressure_msl?: string;
  cloud_cover?: string;
  wind_speed_10m?: string;
  wind_direction_10m?: string;
  wind_gusts_10m?: string;
};

type HourlyWeatherDto = {
  time?: string[];
  temperature_2m?: number[];
  relative_humidity_2m?: number[];
  apparent_temperature?: number[];
  precipitation?: number[];
  rain?: number[];
  snowfall?: number[];
  precipitation_probability?: number[];
  pressure_msl?: number[];
  cloud_cover?: number[];
  wind_speed_10m?: number[];
  wind_direction_10m?: number[];
  wind_gusts_10m?: number[];
};

type UnitsDailyDto = {
  time?: string;
  weather_code?: string;
  temperature_2m_min?: string;
  temperature_2m_max?: string;
  rain_sum?: string;
  showers_sum?: string;
  snowfall_sum?: string;
  precipitation_sum?: string;
  wind_speed_10m_max?: string;
  precipitation_hours?: string;
};

export type DailyWeatherDto = {
  time?: string[];
  weather_code?: number[];
  temperature_2m_min?: number[];
  temperature_2m_max?: number[];
  rain_sum?: number[];
  showers_sum?: number[];
  snowfall_sum?: number[];
  precipitation_sum?: number[];
  wind_speed_10m_max?: number[];
  precipitation_hours?: number[];
};

export type WeatherDto = {
  latitude?: number;
  longitude?: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone?: string;
  timezone_abbreviation?: string;
  elevation?: number;
  current_units?: UnitsDto;
  current?: CurrentWeatherDto;
  hourly_units?: UnitsHourlyDto;
  hourly?: HourlyWeatherDto;
  daily_units?: UnitsDailyDto;
  daily?: DailyWeatherDto;
};
