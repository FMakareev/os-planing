import * as React from 'react';
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import {Breadcrumbs} from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {FormProjectEditor} from '../../Components/FormProjectEditor/FormProjectEditor';
import {ProjectEditorSidebar} from '../../Components/ProjectEditorSidebar/ProjectEditorSidebar';


export const EventEdit = () => (<LayoutWithSidebar
	sidebarContent={<ProjectEditorSidebar/>}
>
	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to: '/'
		},
		{
			name: '5 мая 2019',
			to: '/calendar?data="5 мая 2019"'
		},
		{
			name: 'Зеленогорск',
			to: `/project/edit`
		},
	]}/>

	<div className="inner__content">
		<FormProjectEditor/>
	</div>

</LayoutWithSidebar>);

export default EventEdit;
