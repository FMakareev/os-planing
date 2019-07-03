import React from 'react';
const ProjectList = React.lazy(() => import('./Views/ProjectList'));


export const ProjectRoute = [
	{
		path: '/projects',
		exact: true,
		name: 'Список проектов',
		component: ProjectList,
	},
];

export default ProjectRoute;
