import { memo } from 'react';
import { Calendar, useCalendar, useWeather } from 'modules';

function MainPageProto() {
  const calendar = useCalendar();
  const weatherData = useWeather();

  return <Calendar weatherData={weatherData} {...calendar} />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
