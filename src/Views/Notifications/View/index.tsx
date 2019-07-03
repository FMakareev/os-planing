import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import {NotificationsTop} from "../../../Components/NotificationsTop/NotificationsTop";
import NotificationItem from "../Components/NotificationItem/NotificationItem";
import {mock} from './mock';
import {INotification} from "../../../Types/Types";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";

export const Notifications = () => (<div>
	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to:'/'
		},
		{
			name: 'Уведомления',
			to:'/notifications'
		},
	]}/>

	<PageTitle>
		Уведомления
	</PageTitle>

	<NotificationsTop>
		<div className="notifications__item">Пользователь</div>
	</NotificationsTop>

	<div className="notifications__content">
		{
			mock.map((item: INotification, index: number)=>(<NotificationItem key={`NotificationItem-${index}`} {...item}/>))
		}
	</div>

</div>);

export default Notifications;
