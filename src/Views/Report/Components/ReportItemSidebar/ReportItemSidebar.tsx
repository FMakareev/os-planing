import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {IEvent, IFile, IReport} from "../../../../Apollo/schema";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";


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
      {event.date && EventDateFormat(event.date)}
    </div>
    <Button as={ButtonAsEnum.link} to={`/report/update/${event.id}/${id}`} style={ButtonStyleEnum.icon}>
      <img src={EditMini} className="icon icon-edit-mini "/>
      Редактировать отчет
    </Button>
    <a className="button-icon" href="#!">
      <img src={Download} className="icon icon-download "/>
      Скачать отчет PDF
    </a>
    <AttachmentsList
      attachments={attachments}
    />

  </div>
);

export default ReportItemSidebar;
