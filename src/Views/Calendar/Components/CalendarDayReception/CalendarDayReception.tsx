import * as React from 'react';
import {EventStatusEnum, IEvent, IReceptionCalendar} from "../../../../Apollo/schema";

import ReportIcon from '../../../../Assets/img/spritesvg/report.svg';
import okIcon from '../../../../Assets/img/spritesvg/ok.svg';
import ReviewIcon from '../../../../Assets/img/spritesvg/review.svg';
import PopupEvents from '../PopupEvents/PopupEvents';

interface ICalendarDayReceptionProps {
  reception?: IReceptionCalendar;

  [prop: string]: any
}

const GetStatus = (status: EventStatusEnum) => {
  switch (status) {
    case(EventStatusEnum.accepted): {
      return {
        icon: okIcon,
        text: 'Одобрено',
        className: 'ok-report',
      }
    }
    case(EventStatusEnum.need): {
      return {
        icon: ReportIcon,
        text: 'Ожидает отчета',
        className: 'wait-review',
      }
    }
    case(EventStatusEnum.wait): {
      return {
        icon: ReviewIcon,
        text: 'Ожидает проверки',
        className: 'wait-report',
      }
    }
  }
};


const CalendarDayReception: React.FC<ICalendarDayReceptionProps> = ({reception}) => {
  return (
    <div className="calendar-item__wrap">
      <div className="calendar-city">
        {reception && reception.reception.city}
      </div>
      <div className="calendar-content">
        {
          reception &&
          reception.events &&
          reception.events
            .slice(3)
            .map((event: IEvent) => {
              const status = GetStatus(event.status);
              return (<div className="calendar-group">
                <div className={status.className}>
                  <img src={status.icon} className={"icon"}/>
                  {status.text}
                </div>
                <div className="calendar__text">
                  {event.text}
                </div>
              </div>)
            })
        }
      </div>


      {
        reception &&
        reception.events &&
        reception.events && <PopupEvents
            events={reception.events}
            Button={({onClick}: any) => {

              return (<div onClick={onClick && onClick} className="calendar__fix">
                <a className="calendar__more-info js-more-info" href="javascript:void(0);">
                  Подробнее
                </a>
                <a className="calendar__more" href="javascript:void(0);">
                  Еще {reception.events.length + 1}
                </a>
              </div>)
            }}
        />
      }

    </div>
  );
};

export default CalendarDayReception;