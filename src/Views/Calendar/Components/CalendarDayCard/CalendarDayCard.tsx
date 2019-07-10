import * as React from 'react';
import classNames from 'classnames';
import {IReceptionCalendar} from "../../../../Apollo/schema";
import CalendarDayReceptionList from "../CalendarDayReceptionList/CalendarDayReceptionList";
import CalendarDayReception from '../CalendarDayReception/CalendarDayReception';
import {WithCalendar} from "../../Enhancers/CalendarContext/CalendarContext";
import CalendarMonthReportsEnhancer, {DayCardModeEnum} from '../../Enhancers/CalendarMonthReportsEnhancer/CalendarMonthReportsEnhancer';
import CalendarDayCardTitle from '../CalendarDayCardTitle/CalendarDayCardTitle';


export enum CalendarDayCardEnum {
  passed = 'passed',
  current = 'current',
  blank = 'blank',
}

interface ICalendarDayCardProps {
  date?: any;
  receptions?: IReceptionCalendar[];
  status?: CalendarDayCardEnum;

  [prop: string]: any
}


/**
 * 1. без фильтров
 * 2. с фильтром по приемной
 * 3. с фильтром по проектам
 * 4. с фильтрами по приемной и проекту
 * 5. без фильтров в режиме месячного отчета
 * 6. с фильтром по приемной в режиме месячного отчета
 * 7. с фильтром по проектам в режиме месячного отчета
 * 8. с фильтрами по приемной и проекту в режиме месячного отчета
 *
 * */


const CalendarDayReceptionListWithCalendar = WithCalendar(CalendarDayReceptionList);

export const CalendarDayCard: React.FC<ICalendarDayCardProps> = ({date, projects, reception, receptions, status, enableMonthReport, currentCardMode, toggleCardMode,}) => (
  <div className={classNames("calendar-item", {
    'passed': CalendarDayCardEnum.passed === status,
    'current': CalendarDayCardEnum.current === status,
    'month-report': currentCardMode === DayCardModeEnum.monthReport,
  })}>

    <CalendarDayCardTitle
      toggleCardMode={toggleCardMode}
      currentCardMode={currentCardMode}
      enableMonthReport={enableMonthReport}
      date={date}
    />

    {
      (!reception || currentCardMode === DayCardModeEnum.monthReport) &&
      <CalendarDayReceptionListWithCalendar
          receptions={receptions}
          enableMonthReport={enableMonthReport}
          currentCardMode={currentCardMode}
      />
    }

    {
      reception && currentCardMode !== DayCardModeEnum.monthReport &&
      <CalendarDayReception
          reception={receptions && receptions.find((item: IReceptionCalendar) => item.reception.id === reception)}
      />
    }
  </div>
);

export default CalendarMonthReportsEnhancer(CalendarDayCard);
