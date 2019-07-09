import * as React from 'react';
import {HeaderDate} from "../../../Components/HeaderDate/HeaderDate";
import {CalendarTop} from '../Components/CalendarTop/CalendarTop';
import {CalendarHeader} from '../Components/CalendarHeader/CalendarHeader';
import {CreateListDay} from "./mock";
import {CalendarContent} from "../Components/CalendarContent/CalendarContent";
import PopupEvents from '../Components/PopupEvents/PopupEvents';

const LayoutCalendar = React.lazy(() => import('../../../Containers/LayoutCalendar/LayoutCalendar'));


const CalendarDayList = CreateListDay();

export const Calendar: React.FC<any> = () => {
  return (<LayoutCalendar headerChildren={<HeaderDate
    year={new Date().getFullYear()}
	  month={new Date().getMonth()}
  />}>
    <CalendarTop/>
    <PopupEvents/>
    <div className="calendar__main">
      <CalendarHeader/>
      <CalendarContent
        days={CalendarDayList}
      />
    </div>

  </LayoutCalendar>);
};

export default Calendar;
