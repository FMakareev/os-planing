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
  <NotificationWrapper
    dataAttr={{
    'data-project-row-id':name,
  }}
    mods={EnumNotificationWrapperMods.project}>
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
        data={{
          id,
          name,
        }}
      />
    </div>
  </NotificationWrapper>);

export default ProjectItem;
