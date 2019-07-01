import React from 'react';
const ProjectList = React.lazy(() => import('./Views/ProjectList'));
const ProjectItem = React.lazy(() => import('./Views/ProjectItem'));
const ProjectEdit = React.lazy(() => import('./Views/ProjectEdit'));


export const ProjectRoute = [
	{
		path: '/project/edit/:id',
		exact: false,
		name: 'Редактировать',
		component: ProjectEdit,
	},
	{
		path: '/project/edit',
		exact: true,
		name: 'Создать проект',
		component: ProjectEdit,
	},
	{
		path: '/project/:id',
		exact: false,
		name: 'Проект',
		component: ProjectItem,
	},
	{
		path: '/projects',
		exact: true,
		name: 'Список проектов',
		component: ProjectList,
	},
];

export default ProjectRoute;
