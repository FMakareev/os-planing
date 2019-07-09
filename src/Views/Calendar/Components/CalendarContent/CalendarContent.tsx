import * as React from 'react';
import CalendarDayCard from "../CalendarDayCard/CalendarDayCard";
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import CalendarWeekEnhancer from '../../Enhancers/CalendarWeekEnhancer/CalendarWeekEnhancer';
import {ICalendarDate} from "../../Enhancers/CalendarEnhancer/CalendarEnhancer";

interface ICalendarContentProps extends ICalendarDate {
  [prop: string]: any
}

const CalendarWeekWithEnhancer = CalendarWeekEnhancer(CalendarWeek);


export const CalendarContent: React.FC<ICalendarContentProps> = ({weeks,project,
                                                                   reception, currentDay}) => {
  return (
    <React.Fragment>
      {
        weeks && weeks.map((week: string, idx: number) => <CalendarWeekWithEnhancer
          key={idx}
          time={week}
          project={project}
          reception={reception}
          currentDay={currentDay}
        />)
      }
    </React.Fragment>
  );
};

export default CalendarContent;
