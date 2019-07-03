import * as React from 'react';
import classNames from 'classnames';

interface ICalendarDayCardProps {
    day: string;
    projects: any;
    status: any;
    [prop: string]: any
}

export const CalendarDayCard: React.FC<ICalendarDayCardProps> = ({day, projects, status}) => (
    <div className={classNames("calendar-item", {
        'passed': 'passed' === status,
        'current': 'current' === status,
    })}>
        <div className="calendar-item__title">{day}</div>
        <div className="calendar-item__content">
            {
                projects && projects.map((item: any, index: number) => (<div key={index} className="calendar__city">
                    {item.name}
                    {item.count && item.status && <span className={item.status}>{item.count}</span>}

                </div>))
            }
        </div>
    </div>
);

export default CalendarDayCard;
