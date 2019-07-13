import * as React from 'react';
import LayoutWithSidebar from '../../../../Containers/LayoutWithSidebar/LayoutWithSidebar';
import MonthReportItemContent from '../../Components/MonthReportItemContent/MonthReportItemContent';
import MonthReportItemSidebar from "../../Components/MonthReportItemSidebar/MonthReportItemSidebar";
import GetMonthReportEnhancer from '../../Enhancers/GetMonthReportEnhancer/GetMonthReportEnhancer';
import {IMonthReport} from "../../../../Apollo/schema";

interface IMonthReportItemProps {
	data: IMonthReport;
	[prop:string]: any;
}


export const MonthReportItem: React.FC<IMonthReportItemProps> = ({data}) => (<LayoutWithSidebar
	sidebarContent={<MonthReportItemSidebar
		{...data}
	/>}
>
	<MonthReportItemContent
		{...data}
	/>
</LayoutWithSidebar>);

export default GetMonthReportEnhancer(MonthReportItem);
