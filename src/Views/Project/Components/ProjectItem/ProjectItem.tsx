import * as React from 'react';
import {Link} from "react-router-dom";
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";

import EditIcon from '../../../../Assets/img/spritesvg/edit.svg'
import PopupEditProject from '../PopupEditProject/PopupEditProject';

interface IProjectItemProps {
  title: string;
  link: string;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({title, link}) => (
  <NotificationWrapper mods={EnumNotificationWrapperMods.project}>
    <div className="notifications-item__title">
      {title}
    </div>
    <PopupEditProject/>
  </NotificationWrapper>);

export default ProjectItem;
