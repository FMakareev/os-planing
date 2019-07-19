import * as React from 'react';
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";

import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import MonthReportItemContent from '../../Components/MonthReportItemContent/MonthReportItemContent';
import MonthReportItemSidebar from "../../Components/MonthReportItemSidebar/MonthReportItemSidebar";
import GetMonthReportEnhancer from "../../Enhancers/GetMonthReportEnhancer/GetMonthReportEnhancer";
import ChangeStatusMonthReport from "../../Enhancers/ChangeStatusMonthReport/ChangeStatusMonthReport";

interface IMonthReportItemProps {
	monthReport: IMonthReport;
	[prop:string]: any;
}

const MonthReportItemSidebarWithEnhancer = ChangeStatusMonthReport(MonthReportItemSidebar);

export const MonthReportItem: React.FC<IMonthReportItemProps> = ({monthReport}) => (<LayoutWithSidebar
	sidebarContent={<MonthReportItemSidebarWithEnhancer
		{...monthReport}
	/>}
>
	<MonthReportItemContent
		{...monthReport}
	/>
</LayoutWithSidebar>);

export default GetMonthReportEnhancer(MonthReportItem);
