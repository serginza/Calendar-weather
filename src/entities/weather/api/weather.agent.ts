const SLUG = 'https://api.open-meteo.com';

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(
      // TODO: сделать фильтр и передавать параметры через query
      `${SLUG}/v1/forecast?latitude=56.3287&longitude=44.002&` +
        `daily=weather_code,temperature_2m_min,temperature_2m_max,rain_sum,showers_sum,snowfall_sum,precipitation_sum,wind_speed_10m_max,precipitation_hours&` +
        `hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,snowfall,precipitation_probability,pressure_msl,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&` +
        `current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,snowfall,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m&` +
        `past_days=${3}&forecast_hours=12&past_hours=12&temporal_resolution=native`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error fetching weather data: ', err);
    return;
  }
};
