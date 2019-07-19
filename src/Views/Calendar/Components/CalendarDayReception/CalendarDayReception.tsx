import * as React from 'react';
import {EventStatusEnum, IEvent, IReceptionCalendar} from "../../../../Apollo/schema";

import ReportIcon from '../../../../Assets/img/spritesvg/report.svg';
import okIcon from '../../../../Assets/img/spritesvg/ok.svg';
import ReviewIcon from '../../../../Assets/img/spritesvg/review.svg';
import PopupEvents from '../PopupEvents/PopupEvents';
import {Link} from 'react-router-dom';

interface ICalendarDayReceptionProps {
  reception?: IReceptionCalendar;
  date?: string;
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
      icon: null,
      text: 'Не требует отчета',
      className: 'no-report',
    }
  }
};

/**
 * @desc компонент показывает часть списка мероприятий выбранной в фильтре приемной и дает возможность
 * перейти в модальное окно со всеми мероприятиями
 * */
const CalendarDayReception: React.FC<ICalendarDayReceptionProps> = ({reception,date}) => {
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
                  {
                    status.icon &&
                    <img src={status.icon} className={"icon"}/>
                  }

                  {status.text}
                </div>
                <Link to={`/event/${event.id}`} className="calendar__event-link">
                  {event.title && event.title.slice(0, 60) +'...'}
                </Link>
              </div>)
            })
        }
      </div>


      {
        reception &&
        reception.events &&
        !!(reception.events.length > 0) && <PopupEvents
            events={reception.events}
            reception={reception}
            date={date}
            Button={({onClick}: any) => (<div onClick={onClick && onClick} className="calendar__fix">
              <a className="calendar__more-info js-more-info" href="javascript:void(0);">
                Подробнее
              </a>
              <a className="calendar__more" href="javascript:void(0);">
                Еще {reception.events.length}
              </a>
            </div>)}
        />
      }

    </div>
  );
};

export default CalendarDayReception;