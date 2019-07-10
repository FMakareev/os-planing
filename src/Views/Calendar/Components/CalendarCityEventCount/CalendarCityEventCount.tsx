import * as React from 'react';
import classNames from "classnames";
import {EventStatusEnum} from "../../../../Apollo/schema";

interface ICalendarCityEventCountProps {
  [prop: string]: any
}

const CalendarCityEventCount: React.FC<ICalendarCityEventCountProps> = ({eventCount, priorityStatus}) => {
  return (
    <React.Fragment>
      {
        !!(eventCount > 0) && priorityStatus &&
        <span
            className={classNames({
              'green': priorityStatus === EventStatusEnum.ok,
              'orange': priorityStatus === EventStatusEnum.waitReview,
              'red': priorityStatus === EventStatusEnum.waitReport,
            })}
        >
              {eventCount}
            </span>
      }
    </React.Fragment>
  );
};

export default CalendarCityEventCount;