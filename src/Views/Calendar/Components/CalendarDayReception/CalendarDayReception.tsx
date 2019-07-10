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
  if (status === EventStatusEnum.ok) {
    return {
      icon: okIcon,
      text: 'Одобрено',
      className: 'ok-report',
    }

  } else if (status === EventStatusEnum.waitReport) {
    return {
      icon: ReportIcon,
      text: 'Ожидает отчета',
      className: 'wait-report',
    }

  } else if (status === EventStatusEnum.waitReview) {
    return {
      icon: ReviewIcon,
      text: 'Ожидает проверки',
      className: 'wait-review',
    }

  } else {
    return {
      icon: ReviewIcon,
      text: 'Не требует отчета',
      className: 'no-report',
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
            .slice(0, 3)
            .map((event: IEvent) => {
              const status = GetStatus(event.status);
              return (<div className="calendar-group">
                <div className={status.className}>
                  <img src={status.icon} className={"icon"}/>
                  {status.text}
                </div>
                <div className="calendar__text">
                  {event.text && event.text.slice(0, 60) +'...'}
                </div>
              </div>)
            })
        }
      </div>


      {
        reception &&
        reception.events &&
        !!(reception.events.length > 0) && <PopupEvents
            events={reception.events}
            Button={({onClick}: any) => {

              return (<div onClick={onClick && onClick} className="calendar__fix">
                <a className="calendar__more-info js-more-info" href="javascript:void(0);">
                  Подробнее
                </a>
                <a className="calendar__more" href="javascript:void(0);">
                  Еще {reception.events.length}
                </a>
              </div>)
            }}
        />
      }

    </div>
  );
};

export default CalendarDayReception;