import * as React from 'react';
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import CalendarWeekEnhancer from '../../Enhancers/CalendarWeekEnhancer/CalendarWeekEnhancer';
import {ICalendarContext} from "../../Enhancers/CalendarContext/CalendarContext";

interface ICalendarContentProps extends ICalendarContext {
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
