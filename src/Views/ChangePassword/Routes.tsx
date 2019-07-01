import React from 'react';
const Privacy = React.lazy(() => import('./View'));


export const PrivacyRoute = [
	{
		path: '/privacy',
		exact: true,
		name: 'Privacy',
		component: Privacy,
	}
];

export default PrivacyRoute;
