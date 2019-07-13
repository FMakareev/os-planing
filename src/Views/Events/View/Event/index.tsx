import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {ProjectPageItemContent} from '../../Components/ProjectPageItemContent/ProjectPageItemContent';
import {ProjectPageItemSidebar} from '../../Components/ProjectPageItemSidebar/ProjectPageItemSidebar';
import EventPageEnhancer from "../../Enhancers/EventPageEnhancer/EventPageEnhancer";
import {IEvent} from '../../../../Apollo/schema';
import ChangeStatusEvent from "../../../Calendar/Enhancers/ChangeStatusEvent/ChangeStatusEvent";


interface IEventItemProps {
  data: IEvent;
}



const ProjectPageItemSidebarWIthChangeStatusEvent = ChangeStatusEvent(ProjectPageItemSidebar);

export const EventItem: React.FC<IEventItemProps> = ({data}) => {
  return (<LayoutWithSidebar sidebarContent={<ProjectPageItemSidebarWIthChangeStatusEvent {...data}/>}>
    <ProjectPageItemContent
      city={data.reception && data.reception.city}
      {...data}
    />
  </LayoutWithSidebar>);
};

export default EventPageEnhancer(EventItem);
