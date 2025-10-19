import { memo } from 'react';
import { CalendarFeature } from 'features/calendar';

function CalendarWidgetProto() {
  return <CalendarFeature />;
}

export const CalendarWidget = memo(CalendarWidgetProto);
