import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";


interface IReportItemSidebarProps extends IMonthReport {
  [prop: string]: any
}

export const MonthReportItemSidebar: React.FC<IReportItemSidebarProps> = ({date, id, attachments, zipFile, pdfUrl, reception}) => (
  <div className="inner-info ">
    <div className="inner__date">
      {date && EventDateFormat(date)}
    </div>

    <CheckAccess
      accessByReception={reception && reception.id}
      render={({access}: ICheckAccessApi) => {
        if (!access) return null;
        return (<Button as={ButtonAsEnum.link} to={`/month-report/update/${id}`} style={ButtonStyleEnum.icon}>
          <img src={EditMini} className="icon icon-edit-mini "/>
          Редактировать отчет
        </Button>)
      }}/>


    {
      pdfUrl &&
      <a className={'button-primary'} href={pdfUrl} download>
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
