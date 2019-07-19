import * as React from 'react';
import EditMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {IMonthReport} from "../../../../Apollo/Types/MonthReport";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';
import {EventDateFormat} from "../../../Events/Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import SelectStatus from "../../../../Components/Select/SelectStatus";
import {EventStatusEnum, UserRoleEnum} from "../../../../Apollo/schema";


interface IReportItemSidebarProps extends IMonthReport {
  [prop: string]: any
}


const SelectStatusWithSelect = withSelect(SelectStatus)();


export const MonthReportItemSidebar: React.FC<IReportItemSidebarProps> = ({date, id, attachments, zipFile, pdfUrl, reception, onChangeStatus,status}) => (
  <div className="inner-info ">
    <div className="inner-info__date">
      {date && EventDateFormat(date)}
    </div>

    <div className="inner-info__status-wrap">
      <CheckAccess
        accessRights={UserRoleEnum.admin}
        render={({access}: ICheckAccessApi) => (
          <SelectStatusWithSelect
            disabled={!access}
            labelKey={'label'}
            valueKey={'value'}
            onChange={(option: ISelectOption) => {
              onChangeStatus && onChangeStatus(id, option.value);
            }}
            className={'SelectStatusWithSelect'}
            selected={status || EventStatusEnum.waitReport}
            options={[
              {
                label: 'Одобрено',
                value: EventStatusEnum.ok
              },
              {
                label: 'Ожидает отчета',
                value: EventStatusEnum.waitReport
              },
              {
                label: 'Ожидает проверки',
                value: EventStatusEnum.waitReview
              },
            ]}
          />)
        }
      />
    </div>


    <CheckAccess
      accessByReception={reception && reception.id}
      render={({access}: ICheckAccessApi) => {
        if (!access) return null;
        return (<Button as={ButtonAsEnum.link} to={`/month-report/update/${id}`} style={ButtonStyleEnum.icon}>
          <img src={EditMini} className="icon icon-edit-mini "/>
          Редактировать отчет
        </Button>)
      }}
    />


    {
      pdfUrl &&
      <a className={'button-icon'} href={pdfUrl} download>
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
