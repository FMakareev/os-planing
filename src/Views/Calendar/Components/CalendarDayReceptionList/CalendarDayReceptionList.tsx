import * as React from 'react';
import {IReceptionCalendar} from "../../../../Apollo/schema";
import {ICalendarContext} from "../../Enhancers/CalendarContext/CalendarContext";
import CalendarCityEventCount from '../CalendarCityEventCount/CalendarCityEventCount';
import MonthReportIcon from "../../../../Components/SvgIcons/MonthReportIcon";
import {DayCardModeEnum} from "../../Enhancers/CalendarMonthReportsEnhancer/CalendarMonthReportsEnhancer";

interface ICalendarDayReceptionListProps extends ICalendarContext {
  receptions?: IReceptionCalendar[];

  [prop: string]: any
}


const CalendarDayReceptionList: React.FC<ICalendarDayReceptionListProps> = ({receptions, changeReception, enableMonthReport,currentCardMode}) => {
  return (
    <div className="calendar-item__content">
      {
        receptions && receptions.map((item: IReceptionCalendar, index: number) => (
          <div
            onClick={() => {
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
              <span style={{backgroundColor: 'transparent'}}><MonthReportIcon/></span>
            }
            {
              currentCardMode !== DayCardModeEnum.monthReport &&
              <CalendarCityEventCount
                {...item}
              />
            }
          </div>))
      }
    </div>
  );
};

export default CalendarDayReceptionList;