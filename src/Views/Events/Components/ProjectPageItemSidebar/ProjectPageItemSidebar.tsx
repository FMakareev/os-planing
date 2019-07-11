import * as React from 'react';
import plus from '../../../../Assets/img/spritesvg/plus.svg';
import editMini from '../../../../Assets/img/spritesvg/edit-mini.svg';
import download from '../../../../Assets/img/spritesvg/download.svg';
import Button, {ButtonAsEnum, ButtonStyleEnum} from "../../../../Components/Button/Button";
import {EventStatusEnum, IEvent, UserRoleEnum} from "../../../../Apollo/schema";
import {ISelectOption} from "../../../../Components/Select/withSelect";
import withSelect from "../../../../Components/Select/withSelect";
import SelectStatus from "../../../../Components/Select/SelectStatus";
import {EventDateFormat} from "../../Helpers/EventDateFormat";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";


interface IProjectPageItemSidebarProps extends IEvent {
  [prop: string]: any
}

const SelectStatusWithSelect = withSelect(SelectStatus)();


export const ProjectPageItemSidebar: React.FC<IProjectPageItemSidebarProps> = ({date, statusUpdated, status, id, onChangeStatus}) => (
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

    <Button as={ButtonAsEnum.link} to={'/report/id'} style={ButtonStyleEnum.icon}>
      <img className="icon icon-arrow" src={plus} alt=""/>
      Отчет
    </Button>
    <Button as={ButtonAsEnum.link} to={'/report/edit/id'} style={ButtonStyleEnum.icon}>
      <img className="icon icon-arrow" src={editMini} alt=""/>
      Редактировать отчет
    </Button>
    <Button style={ButtonStyleEnum.icon}>
      <img className="icon icon-arrow" src={download} alt=""/>
      Скачать отчет
    </Button>
  </div>
);

export default ProjectPageItemSidebar;
