import { memo } from 'react';
import { CalendarWidget } from 'widgets/calendar';

function MainPageProto() {
  return <CalendarWidget />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
