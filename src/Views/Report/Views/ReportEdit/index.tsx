import * as React from 'react';
import {ProjectEditorSidebar} from "../../../Events/Components/ProjectEditorSidebar/ProjectEditorSidebar";
import {Breadcrumbs} from "../../../../Components/Breadcrumbs/Breadcrumbs";
import LayoutWithSidebar from "../../../../Containers/LayoutWithSidebar/LayoutWithSidebar";
import FormReportEdit from '../../Components/FormReportEdit/FormReportEdit';
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import ProjectPlace from '../../../../Components/ProjectPlace/ProjectPlace';
import {TagList} from "../../../../Components/TagList/TagList";


export const ReportEdit = () => (<LayoutWithSidebar
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
			to: `/report/edit`
		},
	]}/>
	<PageTitle>
		Проект модернизации театра юного зрителя по адресу ул. Петропавловская, д. 54
	</PageTitle>
	<div className="inner__content">

		<ProjectPlace>
			Зеленогорск
		</ProjectPlace>
		<div className="form__category">
			<TagList/>
		</div>
		<h2 className="h2">Отчет:</h2>
		<FormReportEdit/>
	</div>

</LayoutWithSidebar>);

export default ReportEdit;
