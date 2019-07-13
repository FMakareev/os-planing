import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import archive from '../../../../Assets/img/spritesvg/archive.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {getFileExt, ReportFileItem} from '../ReportFileItem/ReportFileItem';
import {IEvent, IFile, IReport} from "../../../../Apollo/schema";


interface IReportItemSidebarProps extends IReport {
	event: IEvent;
	[prop: string]: any
}




export const ReportItemSidebar: React.FC<IReportItemSidebarProps> = ({
	id,
	event,
	attachments
																																		 }) => (
	<div className="inner-info ">
		<div className="inner__date">
			5 мая 2019
		</div>
		<Button as={ButtonAsEnum.link} to={`/report/update/${event.id}/${id}`} style={ButtonStyleEnum.icon}>
			<img src={EditMini} className="icon icon-edit-mini "/>
			Редактировать отчет
		</Button>
		<a className="button-icon" href="#!">
			<img src={Download} className="icon icon-download "/>
			Скачать отчет PDF
		</a>
		{
			attachments &&
			<a className="archive-link" href="#!">
				<img src={archive} className="icon icon-archive "/>
				Скачать все файлы
				<span>2,3 Мб</span>
			</a>
		}

		{
			attachments && attachments.map((file: IFile)=>(<ReportFileItem
				name={file.name}
				downloadLink={file.url}
				format={getFileExt(file.ext)}
			/>))
		}

	</div>
);

export default ReportItemSidebar;
