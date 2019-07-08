import * as React from 'react';
import {PageTitle} from "../../../../Components/PageTitle/PageTitle";
import PlaceIcon from "../../../../Assets/img/spritesvg/place.svg";
import {TagList} from "../../../../Components/TagList/TagList";
import {Breadcrumbs} from '../../../../Components/Breadcrumbs/Breadcrumbs';
import ProjectPlace from "../../../../Components/ProjectPlace/ProjectPlace";
import ReportContentCell from "../../../../Components/ReportContentCell/ReportContentCell";

interface IReportItemContentProps {
	[prop: string]: any
}

export const ReportItemContent: React.FC<IReportItemContentProps> = () => (
	<React.Fragment>
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
				name: '\n' +
					'Зеленогорск',
				to: `/report/ываыа`
			},
		]}/>

		<PageTitle>
			Проект модернизации театра юного зрителя по адресу ул. Петропавловская, д. 54
		</PageTitle>
		<div className="inner__content">
			<ProjectPlace>
				Зеленогорск
			</ProjectPlace>
			<TagList/>

			<h2 className="h2">
				Отчет:
			</h2>

			<ReportContentCell
				label={'Поле'}
				content={'Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать.'}
			/>
			<ReportContentCell
				label={'Поле'}
				content={'Геодезическая линия, как следует из вышесказанного, осмысленно стабилизирует аксиоматичный интеграл по ориентированной области. Доказательство, конечно, непосредственно раскручивает неопровержимый функциональный анализ, что и требовалось доказать. Расходящийся ряд, конечно, отображает тригонометрический ортогональный определитель. '}
			/>

		</div>
	</React.Fragment>
);

export default ReportItemContent;
