import { memo } from 'react';
import { Calendar } from 'widgets/calendar';

function MainPageProto() {
  return <Calendar />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
