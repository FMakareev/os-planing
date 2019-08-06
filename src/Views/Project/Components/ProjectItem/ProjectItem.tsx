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

export const ProjectItem: React.FC<IProjectItemProps> = ({name,id, EditComponent, DeleteComponent}) => (
  <NotificationWrapper id={`ProjectItem-${name}`} mods={EnumNotificationWrapperMods.project}>
    <div className="notifications-item__title">
      {name}
    </div>
    <div className="notifications-item__setting-links">
      <EditComponent
        initialValues={{
          id,
          name,
        }}
      />
      <DeleteComponent
        id={id}
      />
    </div>
  </NotificationWrapper>);

export default ProjectItem;
