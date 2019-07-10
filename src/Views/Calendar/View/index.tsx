import * as React from 'react';
import {HeaderDate} from "../../../Components/HeaderDate/HeaderDate";
import {CalendarTop} from '../Components/CalendarTop/CalendarTop';
import {CalendarHeader} from '../Components/CalendarHeader/CalendarHeader';
import {CalendarContent} from "../Components/CalendarContent/CalendarContent";
import CalendarEnhancer, {ICalendarDate} from '../Enhancers/CalendarEnhancer/CalendarEnhancer';
import CalendarContextProvider, {WithCalendar} from '../Enhancers/CalendarContext/CalendarContext';

const LayoutCalendar = React.lazy(() => import('../../../Containers/LayoutCalendar/LayoutCalendar'));


interface ICalendarProps extends ICalendarDate {

}


const HeaderDateWithCalendar = WithCalendar(HeaderDate);
const CalendarTopWithCalendar = WithCalendar(CalendarTop);
const CalendarContentWithCalendar = WithCalendar(CalendarContent);

export const Calendar: React.FC<ICalendarProps> = () => {

  return (
    <CalendarContextProvider>
      <LayoutCalendar headerChildren={<HeaderDateWithCalendar/>}>
        <CalendarTopWithCalendar />
        <div className="calendar__main">
          <CalendarHeader/>
          <CalendarContentWithCalendar/>
        </div>

      </LayoutCalendar>
    </CalendarContextProvider>);
};

export default Calendar;
