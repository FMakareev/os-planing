import React from 'react';
const Users = React.lazy(() => import("./Views/Users"));


export const UsersRoute: object[] = [
	{
		path: '/users',
		exact: true,
		name: 'Пользователи',
		component: Users,
	},
];

export default UsersRoute;
