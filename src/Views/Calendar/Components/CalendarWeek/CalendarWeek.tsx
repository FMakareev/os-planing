import * as React from 'react';
import {IDayWeek, IWeek} from "../../../../Apollo/schema";
import CalendarDayCard, {CalendarDayCardEnum} from "../CalendarDayCard/CalendarDayCard";
import Logging from "../../../../Helpers/Logging";

interface ICalendarWeekProps {
  time: string;
  data: IWeek
  project?: string;
  reception?: string;
  [prop: string]: any
}

const FormatWeek = (weeks: IWeek) => {
  delete weeks.__typename;
  return Object.entries(weeks)
};


const GetStatus = (date: string, currentDay: string): CalendarDayCardEnum | null => {
  try {
    const itemDate = new Date(date);
    const currentDate = new Date(currentDay);
    if (itemDate.getMonth() !== currentDate.getMonth()) {
      return CalendarDayCardEnum.passed;
    }
    if (itemDate.getMonth() === currentDate.getMonth() &&
      itemDate.getFullYear() === currentDate.getFullYear() &&
      itemDate.getDate() === currentDate.getDate()) {
      return CalendarDayCardEnum.current;
    }
  } catch (error) {
    Logging(error, 'error');
  }

  return null;
};


const CalendarWeek: React.FC<ICalendarWeekProps> = ({data, currentDay,reception,project, ...rest}) => {
  console.log('CalendarWeek: ',rest);
  return (
    <div className="calendar__content">
      {
        data && FormatWeek(data)
          .map(([key, value]: [string, IDayWeek], idx: number) => {
            return (
              <CalendarDayCard
                key={idx}
                data={value.date}
                receptions={value.receptions}
                project={project}
                reception={reception}
                status={GetStatus(value.date, currentDay)}
              />)
          })
      }
    </div>
  );
};

export default CalendarWeek;