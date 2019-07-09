import * as React from 'react';
import {IReceptionCalendar} from "../../../../Apollo/schema";

interface ICalendarDayReceptionListProps {
  receptions?: IReceptionCalendar[];

  [prop: string]: any
}

const CalendarDayReceptionList: React.FC<ICalendarDayReceptionListProps> = ({receptions}) => {
  return (
    <div className="calendar-item__content">
      {
        receptions && receptions.map((item: IReceptionCalendar, index: number) => (<div
          key={index}
          className="calendar__city">
          {
            item.reception.city
          }
          {
            !!(item.eventCount > 0) && item.priorityStatus &&
            <span className={item.priorityStatus}>
                        {item.eventCount}
                    </span>
          }

        </div>))
      }
    </div>
  );
};

export default CalendarDayReceptionList;