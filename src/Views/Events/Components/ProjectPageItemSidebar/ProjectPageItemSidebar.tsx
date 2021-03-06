import * as React from 'react';
import plus from '../../../../Assets/img/spritesvg/plus.svg';
import editMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import Download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {EventStatusEnum, IEvent, UserRoleEnum} from "../../../../Apollo/schema";
import {ISelectOption} from "../../../../Components/Select/withSelect";
import withSelect from "../../../../Components/Select/withSelect";
import SelectStatus from "../../../../Components/Select/SelectStatus";
import {EventDateFormat} from "../../Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";
import AttachmentsList from '../../../../Components/AttachmentsList/AttachmentsList';


interface IProjectPageItemSidebarProps extends IEvent {
  [prop: string]: any
}

const SelectStatusWithSelect = withSelect(SelectStatus)();


export const ProjectPageItemSidebar: React.FC<IProjectPageItemSidebarProps> = ({
                                                                                 date,
                                                                                 statusUpdated,
                                                                                 created,
                                                                                 status,
                                                                                 id,
                                                                                 report,
                                                                                 onChangeStatus,
                                                                                 attachments,
                                                                                 pdfUrl,
                                                                                 reception,
                                                                                 zipFile
                                                                               }) => (
  <div className="inner-info">
    <div className="inner-info__date">
      {statusUpdated && EventDateFormat(statusUpdated)}
      {!statusUpdated && created && EventDateFormat(created)}
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
            selected={status}
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
              {
                label: 'Не требует отчета',
                value: EventStatusEnum.noReport
              },
            ]}
          />)
        }
      />
    </div>

    {
      !report &&
      <CheckAccess
          accessByReception={reception.id}
          render={({access}: ICheckAccessApi) => {
            if (!access) return null;
            return (<Button as={ButtonAsEnum.link} to={`/report/create/${id}`} style={ButtonStyleEnum.icon}>
              <img className="icon icon-arrow" src={plus} alt=""/>
              Отчет
            </Button>)
          }}
      />
    }

    {
      report &&
      <Button as={ButtonAsEnum.link} to={`/report/${id}/${report}`} style={ButtonStyleEnum.icon}>
          <img className="icon icon-arrow" src={plus} alt=""/>
          Отчет
      </Button>
    }
    {
      report &&
      <CheckAccess
          accessByReception={reception.id}
          render={({access}: ICheckAccessApi) => {
            if (!access) return null;
            return (<Button as={ButtonAsEnum.link} to={`/report/update/${id}/${report}`} style={ButtonStyleEnum.icon}>
              <img className="icon icon-arrow" src={editMini} alt=""/>
              Редактировать отчет
            </Button>)
          }}
      />
    }

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

export default ProjectPageItemSidebar;
