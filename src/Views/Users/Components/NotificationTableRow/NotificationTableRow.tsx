import * as React from 'react';
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";
import {UserAvatar} from '../../../../Components/UserAvatar/UserAvatar';
import {IReception} from "../../../../Apollo/schema";


interface INotificationTableRowProps extends IReception {
  EditComponent?: any;
  DeleteComponent?: any;

  // [prop: string]: any
}


export const NotificationTableRow: React.FC<INotificationTableRowProps> = ({
                                                                             EditComponent,
                                                                             DeleteComponent,
                                                                             id,
                                                                             user,
                                                                             city,

                                                                           }) => (
  <NotificationWrapper data-id={user.email} id={`NotificationTableRow-${user.email}`} mods={EnumNotificationWrapperMods.user}>
    <div className="notifications-item__user">

      <UserAvatar avatar={user.avatar && user.avatar.url} mods={'notifications-item__user-ava'}/>
      <div className="notifications-item__user-nick">
        {city}
      </div>
    </div>
    <div className="notifications-item__name">
      {user.fullName}
    </div>
    <div className="notifications-item__email">
      <a href="mailto:isaeva.maria@gmail.com">
        {user.email}
      </a>
    </div>
    <div className="notifications-item__password">
      {user && user.password}
    </div>
    <div className="notifications-item__setting-links">

      <EditComponent
        initialValues={{
          ...user,
          id,
          city,
        }}
      />

      <DeleteComponent
        user={user}
      />

    </div>
  </NotificationWrapper>
);

export default NotificationTableRow;
