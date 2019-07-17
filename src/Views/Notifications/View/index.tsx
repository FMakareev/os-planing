import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import {EnumNotificationsTopMods, NotificationsTop} from "../../../Components/NotificationsTop/NotificationsTop";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import NotificationList from "../Enhancers/NotificationList/NotificationList";
import PopupDelete from '../../Users/Components/PopupDelete/PopupDelete';
import DeleteNotification from "../Enhancers/DeleteNotification/DeleteNotification";


const PopupDeleteWithQuery = DeleteNotification(PopupDelete);

export const Notifications = () => (<div>
	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to: '/'
		},
		{
			name: 'Уведомления',
			to:'/notifications'
		},
	]}/>

	<PageTitle>
		Уведомления
	</PageTitle>

	<NotificationsTop mods={EnumNotificationsTopMods.notification}>
		<div className="notifications__item">Пользователь</div>
		<PopupDeleteWithQuery	/>
	</NotificationsTop>

	<div className="notifications__content">
		<NotificationList/>
	</div>

</div>);

export default Notifications;
