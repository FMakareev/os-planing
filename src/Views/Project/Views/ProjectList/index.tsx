import * as React from 'react';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from '../../../../Components/PageTitle/PageTitle';
import {NotificationsTop} from '../../../../Components/NotificationsTop/NotificationsTop';
import PopupAddProject from '../../Components/PopupAddProject/PopupAddProject';
import ProjectListEnhancer from '../../Enhancers/ProjectListEnhancer/ProjectListEnhancer';

export const ProjectList = () => (<div className="inner">

	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to:'/'
		},
		{
			name: 'Проекты',
			to:'/projects'
		},
	]}/>
	<PageTitle>
		Проекты
	</PageTitle>

	<section className="notifications">

		<NotificationsTop>
			<div className="notifications__item">
				название проекта
			</div>
		</NotificationsTop>

		<div className="notifications__content">
			<ProjectListEnhancer/>
			<PopupAddProject/>
		</div>
	</section>
</div>);

export default ProjectList;
