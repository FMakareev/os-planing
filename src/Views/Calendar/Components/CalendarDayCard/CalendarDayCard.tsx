import
  * as React from 'react';
import classNames from 'classnames';
import {format} from 'date-fns';
import ru from 'date-fns/locale/ru';

import {IReceptionCalendar} from "../../../../Apollo/schema";
import CalendarDayReceptionList from "../CalendarDayReceptionList/CalendarDayReceptionList";
import CalendarDayReception from '../CalendarDayReception/CalendarDayReception';


export enum CalendarDayCardEnum {
  passed = 'passed',
  current = 'current',
}

interface ICalendarDayCardProps {
  data: string;
  receptions?: IReceptionCalendar[];
  status?: CalendarDayCardEnum | null;

  [prop: string]: any
}

const DateFormat = (data: string) => {
  return format(
    new Date(data),
    'd MMMM',
    {
      locale: ru
    }
  )
};


export const CalendarDayCard: React.FC<ICalendarDayCardProps> = ({data, projects, reception,receptions, status}) => (
  <div className={classNames("calendar-item", {
    'passed': CalendarDayCardEnum.passed === status,
    'current': CalendarDayCardEnum.current === status,
  })}>
    <div className="calendar-item__title">
      {DateFormat(data)}
    </div>
    {
      !reception &&
      <CalendarDayReceptionList
          receptions={receptions}
      />
    }
    {
      reception &&
      <CalendarDayReception
          reception={receptions && receptions.find((item: IReceptionCalendar)=>item.reception.id === reception)}
      />
    }
  </div>
);

export default CalendarDayCard;
