import React from 'react';
const MonthReportItem = React.lazy(() => import('./Views/MonthReportItem'));
const MonthReportEdit = React.lazy(() => import("./Views/MonthReportEdit"));


export const MonthReportRoute: object[] = [

	{
		path: '/month-report/update/:monthReportId',
		exact: false,
		name: 'Редактировать месячный отчет',
		component: MonthReportEdit,
	},
	{
		path: '/month-report/create/:date',
		exact: false,
		name: 'Создать месячный отчет',
		component: MonthReportEdit,
	},
	{
		path: '/month-report/:monthReportId',
		exact: false,
		name: 'Месячный отчет',
		component: MonthReportItem,
	},
];

export default MonthReportRoute;
