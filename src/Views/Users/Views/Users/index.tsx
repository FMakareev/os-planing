import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {EnumNotificationsTopMods, NotificationsTop} from "../../../../Components/NotificationsTop/NotificationsTop";
import {NotificationTableRow} from '../../Components/NotificationTableRow/NotificationTableRow';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {mock} from './mock'
import PopupAddUser from '../../Components/PopupAddUser/PopupAddUser';
import PopupEditUser from '../../Components/PopupEditUser/PopupEditUser';
import PopupDelete from '../../Components/PopupDelete/PopupDelete';

export const Users = () => (<div className="inner">
	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to:'/'
		},
		{
			name: 'Пользователи',
			to:'/users'
		},
	]}/>


	<PageTitle>
		Пользователи
	</PageTitle>

	<NotificationsTop mods={EnumNotificationsTopMods.user}>
		<div className="notifications__item">
			Приемная
		</div>
		<div className="notifications__item">
			Пользователь
		</div>
		<div className="notifications__item">
			e-mail
		</div>
		<div className="notifications__item">
			пароль
		</div>
	</NotificationsTop>

	<div className="notifications__content">
		{
			mock.map((item, index: number) => <NotificationTableRow
				EditComponent={<PopupEditUser/>}
				DeleteComponent={<PopupDelete/>}
				key={`NotificationTableRow-${index}`} {...item} />)
		}
	</div>

	<PopupAddUser/>

</div>);

export default Users;
