import * as React from 'react';
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";
import {IProject} from "../../../../Apollo/schema";


interface IProjectItemProps extends IProject{
  EditComponent: any;
  [prop: string]: any;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({name,id, EditComponent}) => (
  <NotificationWrapper mods={EnumNotificationWrapperMods.project}>
    <div className="notifications-item__title">
      {name}
    </div>
    <EditComponent
      initialValues={{
        id,
        name,
      }}
    />
  </NotificationWrapper>);

export default ProjectItem;
