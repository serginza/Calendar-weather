type BasicWeatherDto = {
  latitude?: number;
  longitude?: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone?: string;
  timezone_abbreviation?: string;
  elevation?: number;
};

export type CurrentUnitsDto = {
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

export type UnitsDailyDto = {
  time?: string;
  weather_code?: string;
  cloud_cover_mean?: string;
  pressure_msl_mean?: string;
  relative_humidity_2m_mean?: string;
  temperature_2m_mean?: string;
  temperature_2m_min?: string;
  temperature_2m_max?: string;
  rain_sum?: string;
  showers_sum?: string;
  snowfall_sum?: string;
  precipitation_sum?: string;
  precipitation_hours?: string;
  wind_speed_10m_max?: string;
  wind_gusts_10m_max?: string;
  wind_direction_10m_dominant?: string;
};

export type DailyWeatherDto = {
  time?: string[];
  weather_code?: number[];
  cloud_cover_mean?: number[];
  pressure_msl_mean?: number[];
  relative_humidity_2m_mean?: number[];
  temperature_2m_mean?: number[];
  temperature_2m_min?: number[];
  temperature_2m_max?: number[];
  rain_sum?: number[];
  showers_sum?: number[];
  snowfall_sum?: number[];
  precipitation_sum?: number[];
  precipitation_hours?: number[];
  wind_speed_10m_max?: number[];
  wind_gusts_10m_max?: number[];
  wind_direction_10m_dominant?: number[];
};

export type ForecastDto = BasicWeatherDto & {
  daily_units?: UnitsDailyDto;
  daily?: DailyWeatherDto;
};

export type CurrentDto = BasicWeatherDto & {
  current_units?: CurrentUnitsDto;
  current?: CurrentWeatherDto;
  hourly_units?: UnitsHourlyDto;
  hourly?: HourlyWeatherDto;
};
