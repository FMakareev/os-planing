import * as React from 'react';
import plus from '../../../../Assets/img/spritesvg/plus.svg';
import editMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {ProjectReportStatus, ReportStatusEnum} from '../../../Project/Components/ProjectReportStatus/ProjectReportStatus';

interface IProjectPageItemSidebarProps {
	date?: string;
	[prop: string]: any
}

export const ProjectPageItemSidebar: React.FC<IProjectPageItemSidebarProps> = ({date}) => (
	<div className="inner-info">
		<div className="inner-info__date">
			{date}
		</div>
		<div className="inner-info__status-wrap">
			<ProjectReportStatus
				status={ReportStatusEnum.ok}
			/>
		</div>

		<Button as={ButtonAsEnum.link} to={'/report/id'} style={ButtonStyleEnum.icon}>
			<img className="icon icon-arrow" src={plus} alt=""/>
			Отчет
		</Button>
		<Button as={ButtonAsEnum.link} to={'/report/edit/id'} style={ButtonStyleEnum.icon}>
			<img className="icon icon-arrow" src={editMini} alt=""/>
			Редактировать отчет
		</Button>
		<Button style={ButtonStyleEnum.icon}>
			<img className="icon icon-arrow" src={download} alt=""/>
			Скачать отчет
		</Button>
	</div>
);

export default ProjectPageItemSidebar;
