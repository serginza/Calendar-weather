const SLUG = 'https://openweathermap.org';
const SLUG_API = 'https://api.openweathermap.org/';

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(
      `${SLUG_API}data/2.5/weather?id=520555&appid=589f53d38b69ac8a17c1be5c47575d37`
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
