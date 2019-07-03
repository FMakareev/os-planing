import React from 'react';
import {LAYOUT_AUTH} from "../../Shared/Layouts";
const Login = React.lazy(() => import('./View/Login'));


export const LoginRoute = [
  {
    path: '/login',
    exact: true,
    name: 'Вход',
    component: Login,
    layout: LAYOUT_AUTH
  },
];

export default LoginRoute;
