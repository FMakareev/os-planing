import * as React from 'react';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";

import {FormChangeAvatar} from '../../Components/FormChangeAvatar/FormChangeAvatar';

import {FormChangeUser} from '../../Components/FormChangeUser/FormChangeUser';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';


export const ProfileSettingsUser = () => (
	<LayoutWithSidebar sidebarContent={<FormChangeAvatar/>}>
		<Breadcrumbs
			history={[
				{
					name: 'Календарь',
					to: '/'
				},
				{
					name: 'Настройки',
					to: '/profile-settings'
				},
			]}
		/>

		<PageTitle>
			Настройки учетной записи
		</PageTitle>

		<div className="inner__content">
			<FormChangeUser/>
		</div>
	</LayoutWithSidebar>
);

export default ProfileSettingsUser;
