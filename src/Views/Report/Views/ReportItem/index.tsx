import * as React from 'react';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import {ReportItemContent} from '../../Components/ReportItemContent/ReportItemContent';
import ReportItemSidebar from "../../Components/ReportItemSidebar/ReportItemSidebar";
import GetReportEnhancer from "../../Enhancers/GetReportEnhancer/GetReportEnhancer";
import {IReport} from "../../../../Apollo/schema";


interface IReportItemProps {
  data: IReport;

  [prop: string]: any;
}

export const ReportItem: React.FC<IReportItemProps> = ({data}) => (
  <LayoutWithSidebar sidebarContent={<ReportItemSidebar/>}>
    <ReportItemContent {...data}/>
  </LayoutWithSidebar>);

export default GetReportEnhancer(ReportItem);
