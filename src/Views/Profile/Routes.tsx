import React from 'react';
const ProfileSettingsAdmin = React.lazy(() => import('./Views/ProfileSettingsAdmin'));
const ProfileSettingsUser = React.lazy(() => import('./Views/ProfileSettingsUser'));


export const ProfileRoute = [
	{
		path: '/profile-settings-admin',
		exact: true,
		name: 'Настройки администратора',
		component: ProfileSettingsAdmin,
	},
	{
		path: '/profile-settings',
		exact: true,
		name: 'Настройки пользователя',
		component: ProfileSettingsUser,
	},
];

export default ProfileRoute;
