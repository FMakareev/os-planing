import * as React from 'react';
import CalendarDayCard from "../CalendarDayCard/CalendarDayCard";

interface ICalendarContentProps {
	[prop: string]: any
}

export const CalendarContent: React.FC<ICalendarContentProps> = ({days}) => (
	<div className="calendar__content">
		{
			days && days.map((item: any, index: number) => (<CalendarDayCard {...item} key={index}/>))
		}
	</div>
);

export default CalendarContent;
