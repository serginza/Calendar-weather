import axios from 'axios';
import type { ApiResponse } from 'shared/types';
import type { CurrentDto, ForecastDto } from '../model';

const SLUG = 'https://api.open-meteo.com';
// TODO: после готовности основного функционала сделать динамисность на регион
const BASE_PATH = `/v1/forecast?latitude=${56.3287}&longitude=${44.002}&`;

export const weatherAgent = {
  getCurrentWeather: async (): ApiResponse<CurrentDto> => {
    return await axios.get(
      `${SLUG}${BASE_PATH}` +
        `hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,snowfall,precipitation_probability,pressure_msl,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&` +
        `current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,snowfall,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m&`
    );
  },

  getForecastWeather: async (dayNumbers: number): ApiResponse<ForecastDto> => {
    return await axios.get(
      `${SLUG}${BASE_PATH}` +
        `daily=weather_code,temperature_2m_min,temperature_2m_max,rain_sum,showers_sum,snowfall_sum,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,precipitation_hours&` +
        `past_days=${3}&forecast_hours=${dayNumbers}&past_hours=12&temporal_resolution=native`
    );
  },
};
