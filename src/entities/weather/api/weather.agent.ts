const SLUG = 'https://openweathermap.org';
const SLUG_API = 'https://api.openweathermap.org/';
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(
      `${SLUG_API}data/2.5/weather?id=520555&appid=${API_KEY}`
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

export const getWeatherImg = (code) => `${SLUG}/img/wn/${code}.png`;
