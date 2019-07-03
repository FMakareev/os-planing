import React from 'react';
const ChangePassword = React.lazy(() => import('./View'));


export const ChangePasswordRoute = [
	{
		path: '/change-password',
		exact: true,
		name: 'Изменить пароль',
		component: ChangePassword,
	}
];

export default ChangePasswordRoute;
