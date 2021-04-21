import React from 'react';
import { render } from 'react-dom';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
function Calendar() {
  return <DayTimePicker timeSlotSizeMinutes={15} />;
}
const target = document.getElementById('root');
export default Calendar;