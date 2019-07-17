import * as React from 'react';
import {IDayWeek, IWeek} from "../../../../Apollo/schema";
import CalendarDayCard, {CalendarDayCardEnum} from "../CalendarDayCard/CalendarDayCard";
import Logging from "../../../../Helpers/Logging";
import {WithCalendar} from "../../Enhancers/CalendarContext/CalendarContext";


interface ICalendarWeekProps {
  time: string;
  data: IWeek
  project?: string;
  reception?: string;

  [prop: string]: any
}

const FormatWeek = (weeks: IWeek) => {
  const month = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return Object.entries(weeks)
    .filter(([key]: [string, IDayWeek]) => month.find(item => item === key));
};


const GetStatus = (date: string, currentDay: string): CalendarDayCardEnum => {
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

    if (itemDate.getFullYear() !== currentDate.getFullYear()) {
      return CalendarDayCardEnum.passed;
    }


  } catch (error) {
    Logging(error, 'error');
  }


  return CalendarDayCardEnum.blank;
};

const CalendarDayCardWithCalendar = WithCalendar(CalendarDayCard);

const CalendarWeek: React.FC<ICalendarWeekProps> = ({data, currentDay}) => {
  return (
    <div className="calendar__content">
      {
        data && FormatWeek(data)
          .map(([key, value]: [string, IDayWeek], idx: number) => {
            return (
              <CalendarDayCardWithCalendar
                key={idx}
                status={GetStatus(value.date, currentDay)}
                {...value}
              />)
          })
      }
    </div>
  );
};

export default CalendarWeek;