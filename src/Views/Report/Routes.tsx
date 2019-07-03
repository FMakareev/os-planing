import React from 'react';
const ReportItem = React.lazy(() => import('./Views/ReportItem'));
const ReportEdit = React.lazy(() => import("./Views/ReportEdit"));


export const ReportRoute: object[] = [
	{
		path: '/report/edit/:id',
		exact: false,
		name: 'Редактировать отчет',
		component: ReportEdit,
	},
	{
		path: '/report/edit',
		exact: true,
		name: 'Создать отчет',
		component: ReportEdit,
	},
	{
		path: '/report/:id',
		exact: false,
		name: 'Отчет',
		component: ReportItem,
	},
];

export default ReportRoute;
