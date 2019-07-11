import * as React from 'react';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import MonthReportItemContent from '../../Components/MonthReportItemContent/MonthReportItemContent';
import MonthReportItemSidebar from "../../Components/MonthReportItemSidebar/MonthReportItemSidebar";

export const MonthReportItem = () => (<LayoutWithSidebar
	sidebarContent={<MonthReportItemSidebar/>}
>
	<MonthReportItemContent/>
</LayoutWithSidebar>);

export default MonthReportItem;
