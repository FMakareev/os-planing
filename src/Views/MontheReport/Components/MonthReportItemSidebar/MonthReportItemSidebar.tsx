import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import archive from '../../../../Assets/img/spritesvg/archive.svg';
import doc from '../../../../Assets/img/spritesvg/doc.svg';
import pdf from '../../../../Assets/img/spritesvg/pdf.svg';
import jpg from '../../../../Assets/img/spritesvg/jpg.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {ReportFileItem, ReportFileTypeEnum} from '../MonthReportFileItem/ReportFileItem';
import {IFile, IMonthReport} from "../../../../Apollo/schema";


interface IReportItemSidebarProps extends IMonthReport{
	[prop: string]: any
}

export const MonthReportItemSidebar: React.FC<IReportItemSidebarProps> = ({updated, id, attachments}) => (
	<div className="inner-info ">
		<div className="inner__date">
			{updated}
		</div>
		<Button as={ButtonAsEnum.link} to={`/month-report/edit/${id}`} style={ButtonStyleEnum.icon}>
			<img src={EditMini} className="icon icon-edit-mini "/>
			Редактировать отчет
		</Button>
		<a className="button-icon" href="#!">
			<img src={Download} className="icon icon-download "/>
			Скачать отчет PDF
		</a>

		<a className="archive-link" href="#!">
			<img src={archive} className="icon icon-archive "/>
			Скачать все файлы
			<span>2,3 Мб</span>
		</a>

		{
			Array.isArray(attachments) && attachments.map((item: IFile)=> (<ReportFileItem
				name={item.name}
				format={ReportFileTypeEnum.pdf}
			/>))
		}

	</div>
);

export default MonthReportItemSidebar;
