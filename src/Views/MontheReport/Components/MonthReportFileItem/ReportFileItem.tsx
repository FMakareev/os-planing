import * as React from 'react';
import DocIcon from "../../../../Assets/img/spritesvg/doc.svg";
import PdfIcon from '../../../../Assets/img/spritesvg/pdf.svg';
import JpgIcon from '../../../../Assets/img/spritesvg/jpg.svg';
import classNames from 'classnames';
import {GetObjectByKey} from "../../../../Helpers/GetObjectByKey";

export enum ReportFileTypeEnum {
	doc = 'doc',
	pdf = 'pdf',
	jpg = 'pdf',
}


interface IReportFileItemProps {
	format: ReportFileTypeEnum;
	name: string;
	downloadLink?: string;

	[prop: string]: any
}




// TODO: сделать опредление формата
export const ReportFileItem: React.FC<IReportFileItemProps> = ({
																																 downloadLink,
																																 name,
																																 format,
																															 }) => {

	return (
		<a className="format-link" href={downloadLink}>
			<img src={GetObjectByKey({
				DocIcon: format === ReportFileTypeEnum.doc,
				PdfIcon: format === ReportFileTypeEnum.pdf,
				JpgIcon: format === ReportFileTypeEnum.jpg,
			}, {
				DocIcon,
				PdfIcon,
				JpgIcon
			})} className="icon icon-doc"/>
			{name}
			<span>Скачать</span>
		</a>
	);
}

export default ReportFileItem;
