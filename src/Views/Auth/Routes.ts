import React from 'react';
import {LAYOUT_AUTH} from "../../Shared/Layouts";
const Login = React.lazy(() => import('./View/Login'));
const LogoutPage = React.lazy(() => import('./View/Logout'));


export const LoginRoute = [
  {
    path: '/login',
    exact: true,
    name: 'Вход',
    component: Login,
    layout: LAYOUT_AUTH
  },
  {
    path: '/logout',
    exact: true,
    name: 'Выход',
    component: LogoutPage,
    layout: LAYOUT_AUTH
  },
];

export default LoginRoute;
