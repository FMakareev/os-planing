import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import archive from '../../../../Assets/img/spritesvg/archive.svg';
import doc from '../../../../Assets/img/spritesvg/doc.svg';
import pdf from '../../../../Assets/img/spritesvg/pdf.svg';
import jpg from '../../../../Assets/img/spritesvg/jpg.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {ReportFileItem, ReportFileTypeEnum} from '../ReportFileItem/ReportFileItem';


interface IReportItemSidebarProps {
	[prop: string]: any
}

export const ReportItemSidebar: React.FC<IReportItemSidebarProps> = () => (
	<div className="inner-info ">
		<div className="inner__date">
			5 мая 2019
		</div>
		<Button as={ButtonAsEnum.link} to={''} style={ButtonStyleEnum.icon}>
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


		<ReportFileItem
			name={'File_pres.pdf'}
			format={ReportFileTypeEnum.pdf}
		/>
		<ReportFileItem
			name={'Document.doc'}
			format={ReportFileTypeEnum.doc}
		/>
		<ReportFileItem
			name={'Image_001.jpg'}
			format={ReportFileTypeEnum.jpg}
		/>

	</div>
);

export default ReportItemSidebar;
