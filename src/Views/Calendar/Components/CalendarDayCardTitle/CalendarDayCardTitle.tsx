import * as React from 'react';
import Close from "../../../../Components/SvgIcons/Close";
import {format} from 'date-fns';
import ru from 'date-fns/locale/ru';
import {DayCardModeEnum} from "../../Enhancers/CalendarMonthReportsEnhancer/CalendarMonthReportsEnhancer";
import MonthReportIcon from '../../../../Components/SvgIcons/MonthReportIcon';

interface ICalendarDayCardTitleProps {
  [prop: string]: any
}

export const CalendarDateFormat = (date: string) => {
  return format(
    new Date(date),
    'd MMMM',
    {
      locale: ru
    }
  )
};


const CalendarDayCardTitle: React.FC<ICalendarDayCardTitleProps> = ({
                                                                      enableMonthReport,
                                                                      currentCardMode,
                                                                      toggleCardMode,
                                                                      date
                                                                    }) => {
  return (
    <div className="calendar-item__title">
      {date && CalendarDateFormat(date)}

      {
        enableMonthReport && <div
            className={'calendar-item__title-month-report'}
            onClick={toggleCardMode && toggleCardMode}
        >
          {
            currentCardMode === DayCardModeEnum.eventReport && <MonthReportIcon/>
          }
          {
            currentCardMode === DayCardModeEnum.monthReport &&
            <Close className={'icon'} width={'14px'} height={'14px'}/>
          }
        </div>
      }
    </div>
  );
};

export default CalendarDayCardTitle;