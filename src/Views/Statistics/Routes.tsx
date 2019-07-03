import React from 'react';
const Statistics = React.lazy(() => import('./View'));


export const StatisticsRoute = [
	{
		path: '/statistics',
		exact: true,
		name: 'Статистика',
		component: Statistics,
	}
];

export default StatisticsRoute;
