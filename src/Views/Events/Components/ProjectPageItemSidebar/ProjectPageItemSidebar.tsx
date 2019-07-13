import * as React from 'react';
import plus from '../../../../Assets/img/spritesvg/plus.svg';
import editMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {EventStatusEnum, IEvent, IFile, UserRoleEnum} from "../../../../Apollo/schema";
import {ISelectOption} from "../../../../Components/Select/withSelect";
import withSelect from "../../../../Components/Select/withSelect";
import SelectStatus from "../../../../Components/Select/SelectStatus";
import {EventDateFormat} from "../../Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";
import archive from "../../../../Assets/img/spritesvg/archive.svg";
import {getFileExt, ReportFileItem} from "../../../Report/Components/ReportFileItem/ReportFileItem";


interface IProjectPageItemSidebarProps extends IEvent {
  [prop: string]: any
}

const SelectStatusWithSelect = withSelect(SelectStatus)();


export const ProjectPageItemSidebar: React.FC<IProjectPageItemSidebarProps> = ({date, statusUpdated, status, id, report, onChangeStatus, attachments}) => (
  <div className="inner-info">
    <div className="inner-info__date">
      {statusUpdated && EventDateFormat(statusUpdated)}
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
            selected={status}
            options={[
              {
                label: EventStatusEnum.ok,
                value: EventStatusEnum.ok
              },
              {
                label: EventStatusEnum.waitReport,
                value: EventStatusEnum.waitReport
              },
              {
                label: EventStatusEnum.waitReview,
                value: EventStatusEnum.waitReview
              },
              {
                label: EventStatusEnum.noReport,
                value: EventStatusEnum.noReport
              },
            ]}
          />)
        }/>
    </div>
    {
      !report &&
      <Button as={ButtonAsEnum.link} to={`/report/create/${id}`} style={ButtonStyleEnum.icon}>
          <img className="icon icon-arrow" src={plus} alt=""/>
          Отчет
      </Button>
    }
    {
      report &&
      <Button as={ButtonAsEnum.link} to={`/report/${id}/${report}`} style={ButtonStyleEnum.icon}>
          {/*<img className="icon icon-arrow" src={plus} alt=""/>*/}
          Отчет
      </Button>
    }
    {
      report &&
      <Button as={ButtonAsEnum.link} to={`/report/update/${id}/${report}`} style={ButtonStyleEnum.icon}>
          <img className="icon icon-arrow" src={editMini} alt=""/>
          Редактировать отчет
      </Button>
    }

    {
      report &&
      <Button style={ButtonStyleEnum.icon}>
          <img className="icon icon-arrow" src={download} alt=""/>
          Скачать отчет
      </Button>
    }

    {
      attachments &&
      <a className="archive-link" href="#!">
          <img src={archive} className="icon icon-archive "/>
          Скачать все файлы
          <span>2,3 Мб</span>
      </a>
    }
    {
      attachments && attachments.map((file: IFile)=>(<ReportFileItem
        name={file.name}
        downloadLink={file.url}
        format={getFileExt(file.ext)}
      />))
    }
  </div>
);

export default ProjectPageItemSidebar;
