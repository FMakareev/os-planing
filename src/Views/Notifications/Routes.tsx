import React from 'react';
const Notifications = React.lazy(() => import('./View'));


export const NotificationsRoute = [
	{
		path: '/notifications',
		exact: true,
		name: 'Уведомления',
		component: Notifications,
	},
];

export default NotificationsRoute;
