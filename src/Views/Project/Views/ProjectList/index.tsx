import * as React from 'react';
import Breadcrumbs from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from '../../../../Components/PageTitle/PageTitle';
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
import {NotificationsTop} from '../../../../Components/NotificationsTop/NotificationsTop';
import PopupAddProject from '../../Components/PopupAddProject/PopupAddProject';


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

			<ProjectItem
				title={'Строительство'}
				link={'/project/123'}
			/>
			<ProjectItem
				title={'Строительство'}
				link={'/project/123'}
			/>
			<ProjectItem
				title={'Строительство'}
				link={'/project/123'}
			/>

			<PopupAddProject/>
		</div>
	</section>
</div>);

export default ProjectList;
