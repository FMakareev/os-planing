import * as React from 'react';
import classNames from 'classnames';

export enum EnumNotificationWrapperMods{
	project = 'project',
	user = 'user',
	statics = 'statics',
}

interface INotificationWrapper {
	mods?: EnumNotificationWrapperMods;
	id?: string;
	'data-id'?: string;
}

export const NotificationWrapper: React.FC<INotificationWrapper> = ({children, mods,id,...rest}) => (<div
	id={id}
	data-id={rest && rest['data-id']}
	className={classNames("notifications-item",{
		'notifications-item--project': mods === EnumNotificationWrapperMods.project,
		'notifications-item--user': mods === EnumNotificationWrapperMods.user,
		'notifications-item--statics': mods === EnumNotificationWrapperMods.statics,
	})}>
	{children}
</div>);

export default NotificationWrapper;
