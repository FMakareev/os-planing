import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {ProjectPageItemContent} from '../../Components/ProjectPageItemContent/ProjectPageItemContent';
import {ProjectPageItemSidebar} from '../../Components/ProjectPageItemSidebar/ProjectPageItemSidebar';


export const EventItem = () => (<LayoutWithSidebar sidebarContent={<ProjectPageItemSidebar/>}>
	<ProjectPageItemContent/>
</LayoutWithSidebar>);

export default EventItem;
