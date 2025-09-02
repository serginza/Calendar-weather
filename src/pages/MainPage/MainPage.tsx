import { memo } from 'react';
import { Calendar } from 'modules';

function MainPageProto() {
  return <Calendar />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
