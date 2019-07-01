import React from 'react';
const Calendar = React.lazy(() => import('./View'));


export const CalendarRoute = [
	{
		path: '/calendar',
		exact: true,
		name: 'Календарь',
		component: Calendar,
	}
];

export default CalendarRoute;
