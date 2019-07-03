import * as React from 'react';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";

import {FormChangeAvatar} from '../../Components/FormChangeAvatar/FormChangeAvatar';

import {FormChangeAdmin} from '../../Components/FormChangeAdmin/FormChangeAdmin';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';


export const ProfileSettingsAdmin = () => (
	<LayoutWithSidebar sidebarContent={<FormChangeAvatar/>}>
		<Breadcrumbs
			history={[
				{
					name: 'Календарь',
					to: '/'
				},
				{
					name: 'Настройки',
					to: '/profile-settings-admin'
				},
			]}
		/>

		<PageTitle>
			Настройки учетной записи
		</PageTitle>
		<div className="inner__content">
			<FormChangeAdmin/>
		</div>
	</LayoutWithSidebar>
);

export default ProfileSettingsAdmin;
