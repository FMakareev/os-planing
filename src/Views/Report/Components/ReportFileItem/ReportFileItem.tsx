import * as React from 'react';
import DocIcon from "../../../../Assets/img/spritesvg/doc.svg";
import PdfIcon from '../../../../Assets/img/spritesvg/pdf.svg';
import JpgIcon from '../../../../Assets/img/spritesvg/jpg.svg';
import AnyIcon from '../../../../Assets/img/spritesvg/anyFileExt.svg';

import {GetObjectByKey} from "../../../../Helpers/GetObjectByKey";

export enum ReportFileTypeEnum {
  doc = '.doc',
  pdf = '.pdf',
  jpg = '.jpg',
  any = 'any',
}


interface IReportFileItemProps {
  format: ReportFileTypeEnum;
  name: string;
  downloadLink?: string;

  [prop: string]: any
}

export const getFileExt = (ext: string): ReportFileTypeEnum => {

  if (ext === ReportFileTypeEnum.pdf) {
    return ReportFileTypeEnum.pdf;
  }
  if (ext === ReportFileTypeEnum.doc) {
    return ReportFileTypeEnum.doc;
  }
  if (ext === ReportFileTypeEnum.jpg) {
    return ReportFileTypeEnum.jpg;
  }
  return ReportFileTypeEnum.any;
};


// TODO: сделать опредление формата
export const ReportFileItem: React.FC<IReportFileItemProps> = ({
                                                                 downloadLink,
                                                                 name,
                                                                 format,
                                                               }) => {

  return (
    <a download className="format-link" href={downloadLink}>
      <img src={GetObjectByKey({
        DocIcon: format === ReportFileTypeEnum.doc,
        PdfIcon: format === ReportFileTypeEnum.pdf,
        JpgIcon: format === ReportFileTypeEnum.jpg,
        AnyIcon: format === ReportFileTypeEnum.any,
      }, {
        DocIcon,
        PdfIcon,
        JpgIcon,
        AnyIcon
      })} className="icon icon-doc"/>
      <span style={{wordBreak: 'break-all'}}>
			{name}
			</span>
      <span>Скачать</span>
    </a>
  );
}

export default ReportFileItem;
