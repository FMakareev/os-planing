import React from 'react';
const Event = React.lazy(() => import('./View/Event'));
const EventEdit = React.lazy(() => import('./View/EventEditor'));


export const EventRoute = [
  {
    path: '/event/edit/:eventId',
    exact: false,
    name: 'Редактировать мероприятие',
    component: EventEdit,
  },
  {
    path: '/event/edit',
    exact: true,
    name: 'Создать мероприятие',
    component: EventEdit,
  },
  {
    path: '/event/:eventId',
    exact: false,
    name: 'Мероприятие',
    component: Event,
  },
];

export default EventRoute;
