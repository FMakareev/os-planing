import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";


interface IReportItemSidebarProps extends IMonthReport {
  [prop: string]: any
}

export const MonthReportItemSidebar: React.FC<IReportItemSidebarProps> = ({date, id, attachments, zipFile, pdfUrl}) => (
  <div className="inner-info ">
    <div className="inner__date">
      {date && EventDateFormat(date)}
    </div>
    <Button as={ButtonAsEnum.link} to={`/month-report/update/${id}`} style={ButtonStyleEnum.icon}>
      <img src={EditMini} className="icon icon-edit-mini "/>
      Редактировать отчет
    </Button>
    {
      pdfUrl &&
      <a className="button-icon" download href={pdfUrl}>
          <img src={Download} className="icon icon-download "/>
          Скачать отчет PDF
      </a>
    }

    <AttachmentsList
      allFiles={zipFile}
      attachments={attachments}
    />

  </div>
);

export default MonthReportItemSidebar;
