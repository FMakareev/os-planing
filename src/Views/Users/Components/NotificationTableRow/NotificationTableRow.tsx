import * as React from 'react';
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";
import {UserAvatar} from '../../../../Components/UserAvatar/UserAvatar';
import EditIcon from '../../../../Assets/img/spritesvg/edit.svg';
import DeleteIcon from '../../../../Assets/img/spritesvg/delete.svg';
import {IUser} from "../../../../Types/Types";
import {Link} from "react-router-dom";

interface INotificationTableRowProps extends IUser {
  EditComponent?: any;
  DeleteComponent?: any;

  [prop: string]: any
}


export const NotificationTableRow: React.FC<INotificationTableRowProps> = ({
                                                                             lobby,
                                                                             firstName,
                                                                             lastName,
                                                                             patronymic,
                                                                             avatar,
                                                                             email,
                                                                             password,
                                                                             id,
                                                                             EditComponent,
                                                                             DeleteComponent
                                                                           }) => (
  <NotificationWrapper mods={EnumNotificationWrapperMods.user}>
    <div className="notifications-item__user">

      <UserAvatar avatar={avatar} mods={'notifications-item__user-ava'}/>
      <div className="notifications-item__user-nick">
        {lobby}
      </div>
    </div>
    <div className="notifications-item__name">
      {firstName + ' ' + lastName + ' ' + patronymic}
    </div>
    <div className="notifications-item__email">
      <a href="mailto:isaeva.maria@gmail.com">
        {email}
      </a>
    </div>
    <div className="notifications-item__password">
      {password}
    </div>
    <div className="notifications-item__setting-links">

      {EditComponent}

      {DeleteComponent}

    </div>
  </NotificationWrapper>
);

export default NotificationTableRow;
