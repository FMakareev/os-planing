import * as React from 'react';
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";
import {UserAvatar} from '../../../../Components/UserAvatar/UserAvatar';
import {IReception} from "../../../../Apollo/schema";


interface IReceptionTableRowProps extends IReception {
  EditComponent?: any;
  DeleteComponent?: any;

  // [prop: string]: any
}


export const ReceptionTableRow: React.FC<IReceptionTableRowProps> = ({
                                                                       EditComponent,
                                                                       DeleteComponent,
                                                                       id,
                                                                       user,
                                                                       city,

                                                                     }) => (
  <NotificationWrapper
    dataAttr={{
      'data-user-row-id': user.email,
    }}
    mods={EnumNotificationWrapperMods.user}
  >
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
        data={{
          user,
          id,
          city,
        }}
      />

    </div>
  </NotificationWrapper>
);

export default ReceptionTableRow;
