import React from 'react';
const ReportItem = React.lazy(() => import('./Views/ReportItem'));
const ReportEdit = React.lazy(() => import("./Views/ReportEdit"));


export const ReportRoute: object[] = [
	{
		path: '/report/update/:eventId/:reportId',
		exact: false,
		name: 'Редактировать отчет',
		component: ReportEdit,
	},
	{
		path: '/report/create/:eventId',
		exact: true,
		name: 'Создать отчет',
		component: ReportEdit,
	},
	{
		path: '/report/:eventId/:reportId',
		exact: false,
		name: 'Отчет',
		component: ReportItem,
	},
];

export default ReportRoute;
