import * as React from 'react';

import classNames from 'classnames';

export enum EnumNotificationsTopMods {
	project = 'project',
	user = 'user',
	statics = 'statics',
	notification= 'notification',
}

interface INotificationsTopProps {
	mods?: EnumNotificationsTopMods;
}

export const NotificationsTop: React.FC<INotificationsTopProps> = ({mods, children}) => <div className={classNames("notifications__top",{
	'notifications__top--project': mods === EnumNotificationsTopMods.project,
	'notifications__top--user': mods === EnumNotificationsTopMods.user,
	'notifications__top--statics': mods === EnumNotificationsTopMods.statics,
	'notifications__top--notification': mods === EnumNotificationsTopMods.notification,
})}>
	{
		children
	}
</div>;
export default NotificationsTop;
