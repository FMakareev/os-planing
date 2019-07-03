import * as React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import {FormChangePassword} from '../Components/FormChangePassword/FormChangePassword';


export const ChangePassword = () => (<div className="inner inner--password">
	<Breadcrumbs
		history={[
			{
				name: 'Настройки',
				to: '/profile-settings'
			},
			{
				name: 'Сменить пароль',
				to: '/change-password'
			},
		]}
	/>
	<PageTitle>
		Изменить свой пароль
	</PageTitle>

	<div className="inner__content">
		<p>Будет изменен пароль для isaeva.maria@gmail.com</p>
		<FormChangePassword/>
	</div>
</div>);

export default ChangePassword;
