import { memo } from 'react';
import { Calendar, useCalendar } from 'modules';

function MainPageProto() {
  const calendar = useCalendar();

  return <Calendar {...calendar} />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
