const SLUG =
  'https://api.openweathermap.org/data/3.0/onecall?lat={56.19}&lon={44.00}&appid={589f53d38b69ac8a17c1be5c47575d37}';

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(SLUG);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error fetching weather data: ', err);
    return;
  }
};
