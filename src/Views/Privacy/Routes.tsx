import React from 'react';
const Privacy = React.lazy(() => import('./View'));


export const PrivacyRoute = [
	{
		path: '/privacy',
		exact: true,
		name: 'Политика конфиденциальности',
		component: Privacy,
	}
];

export default PrivacyRoute;
