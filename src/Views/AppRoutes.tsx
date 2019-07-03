import * as React from "react";
import {NotificationsRoute} from "./Notifications/Routes";
import {CalendarRoute} from "./Calendar/Routes";
import {ChangePasswordRoute} from "./ChangePassword/Routes";
import {PrivacyRoute} from "./Privacy/Routes";
import {ProfileRoute} from "./Profile/Routes";
import {ProjectRoute} from "./Project/Routes";
import {ReportRoute} from "./Report/Routes";
import {StatisticsRoute} from "./Statistics/Routes";
import {UsersRoute} from "./Users/Routes";
import RoutesList from "./Pages/RoutesList/RoutesList";
import LoginRoute from "./Auth/Routes";
import EventRoute from "./Events/Routes";

const Page404 = React.lazy(() => import('./Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('./Pages/Page500/Page500'));


export const AppRoutes = [
	...CalendarRoute,
	...NotificationsRoute,
	...ChangePasswordRoute,
	...PrivacyRoute,
	...ProfileRoute,
	...ProjectRoute,
	...ReportRoute,
	...StatisticsRoute,
	...UsersRoute,
	...LoginRoute,
	...EventRoute,
	{
		path: '/routes-list',
		exact: true,
		name: '',
		component: RoutesList,
	},
	{
		path: '/500',
		exact: true,
		name: 'Неизместная ошибка',
		component: Page500,
	},
	{
		path: '/404',
		exact: true,
		name: 'Страница не найдена',
		component: Page404,
	}, {
		path: '*',
		exact: false,
		name: 'Страница не найдена',
		component: Page404,
	},
];

export default AppRoutes;
