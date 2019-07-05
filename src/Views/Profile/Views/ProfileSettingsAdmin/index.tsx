import * as React from 'react';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";

import {FormChangeAvatar} from '../../Components/FormChangeAvatar/FormChangeAvatar';

import {FormChangeSMTPSetting} from '../../Components/FormChangeSMTPSetting/FormChangeSMTPSetting';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import ChangeAvatarHOC from '../../Enhancers/ChangeAvatarHOC/ChangeAvatarHOC'
import ChangeSettingsHoc from "../../Enhancers/ChangeSettingsHOC/ChangeSettingsHOC";
import GetSmtpSetting from "../../Enhancers/GetSMTPSetting/GetSMTPSetting";


const FormChangeAvatarWithQuery = ChangeAvatarHOC(FormChangeAvatar);
const FormChangeSMTPSettingWithQuery = ChangeSettingsHoc(FormChangeSMTPSetting);
const GetSmtpSettingWithQuery = GetSmtpSetting(FormChangeSMTPSettingWithQuery);


export const ProfileSettingsAdmin = () => (
	<LayoutWithSidebar sidebarContent={<FormChangeAvatarWithQuery/>}>
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
			<GetSmtpSettingWithQuery/>
		</div>
	</LayoutWithSidebar>
);

export default ProfileSettingsAdmin;
