import React from 'react';
import {LAYOUT_CALENDAR} from "../../Shared/Layouts";
const Calendar = React.lazy(() => import('./View'));


export const CalendarRoute = [
	{
		path: '/',
		exact: true,
		name: 'Календарь',
		component: Calendar,
		layout: LAYOUT_CALENDAR
	},
	{
		path: '/calendar',
		exact: true,
		name: 'Календарь',
		component: Calendar,
		layout: LAYOUT_CALENDAR,
	},
];

export default CalendarRoute;
