import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {ProjectPageItemContent} from '../../Components/ProjectPageItemContent/ProjectPageItemContent';
import {ProjectPageItemSidebar} from '../../Components/ProjectPageItemSidebar/ProjectPageItemSidebar';
import EventPageEnhancer from "../../Enhancers/EventPageEnhancer/EventPageEnhancer";
import {IEvent, IReport} from '../../../../Apollo/schema';
import ChangeStatusEvent from "../../../Calendar/Enhancers/ChangeStatusEvent/ChangeStatusEvent";
import GetReportEnhancer from "../../../Report/Enhancers/GetReportEnhancer/GetReportEnhancer";


interface IEventItemProps {
  data: IEvent;
  report?: IReport;
}



const ProjectPageItemSidebarWIthChangeStatusEvent = ChangeStatusEvent(ProjectPageItemSidebar);

export const EventItem: React.FC<IEventItemProps> = ({data, report}) => {
  return (<LayoutWithSidebar sidebarContent={<ProjectPageItemSidebarWIthChangeStatusEvent {...report} {...data}/>}>
    <ProjectPageItemContent
      city={data.reception && data.reception.city}
      {...data}
    />
  </LayoutWithSidebar>);
};

export default EventPageEnhancer(GetReportEnhancer(EventItem));
