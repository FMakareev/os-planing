import * as React from 'react';
import {HeaderDate} from "../../../Components/HeaderDate/HeaderDate";
import {CalendarTop} from '../Components/CalendarTop/CalendarTop';
import {CalendarHeader} from '../Components/CalendarHeader/CalendarHeader';
import {CalendarContent} from "../Components/CalendarContent/CalendarContent";
import PopupEvents from '../Components/PopupEvents/PopupEvents';
import CalendarEnhancer, {ICalendarDate} from '../Enhancers/CalendarEnhancer/CalendarEnhancer';

const LayoutCalendar = React.lazy(() => import('../../../Containers/LayoutCalendar/LayoutCalendar'));


interface ICalendarProps extends ICalendarDate{

}

export const Calendar: React.FC<ICalendarProps> = ({changeDate,
                                                     currentDay,
                                                     changeProject,
                                                     changeReception,
                                                     year,
                                                     month,
                                                     weeks,
                                                     day,
                                                     project,
                                                     reception,
                                                   }) => {
  return (<LayoutCalendar headerChildren={<HeaderDate
    changeDate={changeDate}
    year={year}
    month={month}
    currentDay={currentDay}
  />}>
    <CalendarTop
      changeProject={changeProject}
      changeReception={changeReception}
      project={project}
      reception={reception}
    />
    {/*<PopupEvents/>*/}
    <div className="calendar__main">
      <CalendarHeader/>
      <CalendarContent
        changeDate={changeDate}
        weeks={weeks}
        year={year}
        month={month}
        day={day}
        currentDay={currentDay}
        project={project}
        reception={reception}
      />
    </div>

  </LayoutCalendar>);
};

export default CalendarEnhancer(Calendar);
