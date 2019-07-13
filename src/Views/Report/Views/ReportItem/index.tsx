import * as React from 'react';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import {ReportItemContent} from '../../Components/ReportItemContent/ReportItemContent';
import ReportItemSidebar from "../../Components/ReportItemSidebar/ReportItemSidebar";
import GetReportEnhancer from "../../Enhancers/GetReportEnhancer/GetReportEnhancer";
import {IEvent, IReport} from "../../../../Apollo/schema";
import {compose} from "react-apollo";
import EventPageEnhancer from "../../../Events/Enhancers/EventPageEnhancer/EventPageEnhancer";


interface IReportItemProps {
  data: IEvent;
  report: IReport;

  [prop: string]: any;
}

const composeEnhancers = compose(GetReportEnhancer,EventPageEnhancer);

export const ReportItem: React.FC<IReportItemProps> = ({data, report}) => (
  <LayoutWithSidebar sidebarContent={<ReportItemSidebar event={data} {...report}/>}>
    <ReportItemContent event={data} {...report}/>
  </LayoutWithSidebar>);

export default composeEnhancers(ReportItem);
