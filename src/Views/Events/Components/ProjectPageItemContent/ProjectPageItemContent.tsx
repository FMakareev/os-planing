import * as React from 'react';
import {Breadcrumbs} from "../../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import {ProjectPlace} from '../../../../Components/ProjectPlace/ProjectPlace';
import {TagList} from "../../../../Components/TagList/TagList";
import {Button, ButtonAsEnum} from '../../../../Components/Button/Button';
import {IEvent} from "../../../../Apollo/schema";

import {EventDateFormat} from "../../Helpers/EventDateFormat";
import EventBreadcrumbs from "../EventBreadcrumbs/EventBreadcrumbs";

interface IProjectPageItemContentProps extends IEvent {
	[prop: string]: any
}






export const ProjectPageItemContent: React.FC<IProjectPageItemContentProps> = ({title,text, projects,date,city, id}) => (
	<React.Fragment>
		<EventBreadcrumbs
			date={date}
			id={id}
			city={city}
		/>

		<PageTitle>
			{title}
		</PageTitle>
		<div className="inner__content">
			<TagList
				projects={projects}
			/>
			<ProjectPlace>
				{city}
			</ProjectPlace>

			<TagList/>
			<Button as={ButtonAsEnum.link} to={`/event/edit/${id}`}>
				Редактировать
			</Button>

			<div>
				{text}
			</div>

		</div>

	</React.Fragment>
);

export default ProjectPageItemContent;
