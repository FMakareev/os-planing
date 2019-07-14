import * as React from 'react';
import {IFile} from "../../Apollo/schema";
import archive from "../../Assets/img/spritesvg/archive.svg";
import {getFileExt, ReportFileItem} from "../../Views/Report/Components/ReportFileItem/ReportFileItem";

interface IAttachmentsListProps {
  attachments: IFile[];

  [prop: string]: any
}


const getSizeALlFile = (attachments: IFile[]): number =>
  attachments.reduce((result: number, item: IFile) => {
    return result + (item.size * 0.001);
  }, 0);


const AttachmentsList: React.FC<IAttachmentsListProps> = ({attachments}) => {
  return (
    <React.Fragment>
      {
        !!(Array.isArray(attachments) && attachments.length) &&
        <a className="archive-link" href="#!">
            <img src={archive} className="icon icon-archive "/>
            Скачать все файлы
            <span>{getSizeALlFile(attachments).toFixed(2)} Мб</span>
        </a>
      }

      {
        Array.isArray(attachments) && attachments.map((file: IFile) => (<ReportFileItem
          name={file.name}
          downloadLink={file.url}
          format={getFileExt(file.ext)}
        />))
      }
    </React.Fragment>
  );
};

export default AttachmentsList;