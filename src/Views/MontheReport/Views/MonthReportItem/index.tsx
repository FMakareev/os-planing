import * as React from 'react';
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";

import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import MonthReportItemContent from '../../Components/MonthReportItemContent/MonthReportItemContent';
import MonthReportItemSidebar from "../../Components/MonthReportItemSidebar/MonthReportItemSidebar";
import GetMonthReportEnhancer from "../../Enhancers/GetMonthReportEnhancer/GetMonthReportEnhancer";

interface IMonthReportItemProps {
	monthReport: IMonthReport;
	[prop:string]: any;
}


export const MonthReportItem: React.FC<IMonthReportItemProps> = ({monthReport}) => (<LayoutWithSidebar
	sidebarContent={<MonthReportItemSidebar
		{...monthReport}
	/>}
>
	<MonthReportItemContent
		{...monthReport}
	/>
</LayoutWithSidebar>);

export default GetMonthReportEnhancer(MonthReportItem);
