import React from 'react';
const MonthReportItem = React.lazy(() => import('./Views/MonthReportItem'));
const MonthReportEdit = React.lazy(() => import("./Views/MonthReportEdit"));


export const MonthReportRoute: object[] = [
	{
		path: '/month-report/edit/:id',
		exact: false,
		name: 'Редактировать месячный отчет',
		component: MonthReportEdit,
	},
	{
		path: '/month-report/edit',
		exact: true,
		name: 'Создать месячный отчет',
		component: MonthReportEdit,
	},
	{
		path: '/month-report/:id',
		exact: false,
		name: 'Месячный отчет',
		component: MonthReportItem,
	},
];

export default MonthReportRoute;
