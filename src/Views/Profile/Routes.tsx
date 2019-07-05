import React from 'react';
const ProfileSettingsAdmin = React.lazy(() => import('./Views/ProfileSettingsAdmin'));


export const ProfileRoute = [
	{
		path: '/settings',
		exact: true,
		name: 'Настройки администратора',
		component: ProfileSettingsAdmin,
	},
];

export default ProfileRoute;
