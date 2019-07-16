import * as React from 'react';
import {IReceptionCalendar} from "../../../../Apollo/schema";
import {ICalendarContext} from "../../Enhancers/CalendarContext/CalendarContext";
import CalendarCityEventCount from '../CalendarCityEventCount/CalendarCityEventCount';
import MonthReportIcon from "../../../../Components/SvgIcons/MonthReportIcon";
import {DayCardModeEnum} from "../../Enhancers/CalendarMonthReportsEnhancer/CalendarMonthReportsEnhancer";
import {Link} from "react-router-dom";
import {IStoreState} from "../../../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from "../../../../Store/Reducers/User/reducers";

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

const CalendarDayReceptionList: React.FC<ICalendarDayReceptionListProps> = ({receptions, changeReception, enableMonthReport, currentCardMode, currentDay, user, date}) => {
  return (
    <div className="calendar-item__content">
      {
        receptions && receptions.map((item: IReceptionCalendar, index: number) => {
          if (currentCardMode === DayCardModeEnum.monthReport) {
            console.log('GetMonthReportLink: ', GetMonthReportLink(item, currentCardMode, date, user.user && user.user.reception));
          }

          return (
            <Link
              to={GetMonthReportLink(item, currentCardMode, date, user.user && user.user.reception)}
              onClick={() => {
                if (currentCardMode === DayCardModeEnum.monthReport) return null;
                changeReception && changeReception(item.reception.id)
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
                <MonthReportIcon/>
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
    </div>
  );
};

export default connect(mapStateToProps, null)(CalendarDayReceptionList);