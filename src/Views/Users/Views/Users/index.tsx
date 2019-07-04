import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {EnumNotificationsTopMods, NotificationsTop} from "../../../../Components/NotificationsTop/NotificationsTop";
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import PopupAddUser from '../../Components/PopupAddUser/PopupAddUser';

import ReceptionListHOC from '../../Enhancers/ReceptionListHOC/ReceptionListHOC';
import CreateReception from '../../Enhancers/CreateReception/CreateReception';
import ReceptionList from "../../Components/ReceptionList/ReceptionList";


const PopupAddUserWithQuery = CreateReception(PopupAddUser);



const ReceptionListWithQuery = ReceptionListHOC(ReceptionList);

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
		<ReceptionListWithQuery/>
	</div>
	<PopupAddUserWithQuery/>

</div>);

export default Users;
