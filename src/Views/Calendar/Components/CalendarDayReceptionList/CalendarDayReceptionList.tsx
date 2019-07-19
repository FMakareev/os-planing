import * as React from 'react';
import {SetStateAction} from 'react';
import {EventStatusEnum, IReceptionCalendar} from "../../../../Apollo/schema";
import {ICalendarContext} from "../../Enhancers/CalendarContext/CalendarContext";
import CalendarCityEventCount from '../CalendarCityEventCount/CalendarCityEventCount';
import MonthReportIcon from "../../../../Components/SvgIcons/MonthReportIcon";
import {DayCardModeEnum} from "../../Enhancers/CalendarMonthReportsEnhancer/CalendarMonthReportsEnhancer";
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from "../../../../Store/Reducers/User/reducers";
import PopupEvents from "../PopupEvents/PopupEvents";
import {Link} from "react-router-dom";
import classNames from 'classnames';

interface ICalendarDayReceptionListProps extends ICalendarContext {
  receptions?: IReceptionCalendar[];
  user: IUserState;

  [prop: string]: any
}

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});


/**
 * @param item - объект с информацией по текущему дню календаря
 * @param currentCardMode - текущий режим отображения карточки дня
 * @param date - дата карточки дня
 * @param reception - приемная авторизованного пользователя
 * */
const GetMonthReportLink = (item: IReceptionCalendar, currentCardMode: DayCardModeEnum, date?: string, reception?: any) => {
  if (date) {
    if (currentCardMode === DayCardModeEnum.monthReport) {
      if (item.monthReport) {
        return `/month-report/${item.monthReport.id}`
      } else if (reception && item.reception.id === reception.id) {
        return `/month-report/create/${new Date(date).toISOString()}`
      }
    }
  }
  return '#!';
};


/**
 * @desc компонент выводит список приемныъх с маркером в виде кол-ва мероприятий
 * в текущем дне либо если текущей день 5 число дает возможность вывести месячные отчеты
 * */
const CalendarDayReceptionList: React.FC<ICalendarDayReceptionListProps> = ({receptions, changeReception, enableMonthReport, currentCardMode, currentDay, user, date, changeDate}) => {


  const [activeReceptionCalendar, setReceptionCalendar] = React.useState<SetStateAction<IReceptionCalendar>>();

  return (
    <div className="calendar-item__content">
      {
        receptions && receptions.map((item: IReceptionCalendar, index: number) => {
          return (
            <Link
              to={GetMonthReportLink(item, currentCardMode, date, user.user && user.user.reception)}
              onClick={(event) => {
                if (currentCardMode !== DayCardModeEnum.monthReport) {
                  event.preventDefault();
                  event.stopPropagation();
                  setReceptionCalendar && setReceptionCalendar(item)
                }
              }}
              key={index}
              className="calendar__city"
            >
              {
                item.reception.city
              }
              {
                currentCardMode === DayCardModeEnum.monthReport &&
                <span style={{backgroundColor: 'transparent'}}>
                <MonthReportIcon

                  fill={classNames({
                    '#4dc87e': item.monthReport && item.monthReport.status === EventStatusEnum.ok,
                    '#f69752': item.monthReport && item.monthReport.status === EventStatusEnum.waitReview,
                    '#ef223a': item.monthReport && item.monthReport.status === EventStatusEnum.waitReport,
                  })}
                />
              </span>
              }
              {
                currentCardMode !== DayCardModeEnum.monthReport &&
                <CalendarCityEventCount
                  {...item}
                />
              }
            </Link>)
        })
      }
      {
        activeReceptionCalendar &&
        <PopupEvents
          // @ts-ignore
            events={activeReceptionCalendar.events}
            reception={activeReceptionCalendar}
            date={date}
            isOpen={!!(activeReceptionCalendar)}
            onClose={() => {
              setReceptionCalendar && setReceptionCalendar(undefined)
            }}
        />
      }

    </div>
  );
};

export default connect(mapStateToProps, null)(CalendarDayReceptionList);