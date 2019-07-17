import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {IEvent, IReport} from "../../../../Apollo/schema";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";


interface IReportItemSidebarProps extends IReport {
  event: IEvent;

  [prop: string]: any
}


export const ReportItemSidebar: React.FC<IReportItemSidebarProps> = ({
                                                                       id,
                                                                       event,
                                                                       attachments,
                                                                       pdfUrl,
                                                                       zipFile
                                                                     }) => (
  <div className="inner-info ">
    <div className="inner__date">
      {event.date && EventDateFormat(event.date)}
    </div>
    <CheckAccess
      accessByReception={event.reception.id}
      render={({access}: ICheckAccessApi) => {
        if (!access) return null;
        return (<Button as={ButtonAsEnum.link} to={`/report/update/${event.id}/${id}`} style={ButtonStyleEnum.icon}>
          <img src={EditMini} className="icon icon-edit-mini "/>
          Редактировать отчет
        </Button>)
      }}/>

    {
      pdfUrl &&
      <Button as={ButtonAsEnum.link} to={pdfUrl} style={ButtonStyleEnum.icon}>
          <img src={Download} className="icon icon-download "/>
          Скачать отчет PDF
      </Button>
    }
    <AttachmentsList
      allFiles={zipFile}
      attachments={attachments}
    />

  </div>
);

export default ReportItemSidebar;
