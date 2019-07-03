import * as React from 'react';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import {ReportItemContent} from '../../Components/ReportItemContent/ReportItemContent';
import ReportItemSidebar from "../../Components/ReportItemSidebar/ReportItemSidebar";

export const ReportItem = () => (<LayoutWithSidebar sidebarContent={<ReportItemSidebar/>}>
	<ReportItemContent/>


</LayoutWithSidebar>);

export default ReportItem;
