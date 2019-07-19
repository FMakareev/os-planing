import * as React from 'react';

import SelectStatus from "../../../../Components/Select/SelectStatus";
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import {EventStatusEnum, IEvent, UserRoleEnum} from '../../../../Apollo/schema';
import {Link} from "react-router-dom";
import TagList from '../../../../Components/TagList/TagList';
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";

export interface IEventDetailsCardProps extends IEvent {

  [prop: string]: any
}

const SelectStatusWithSelect = withSelect(SelectStatus)();


const EventDetailsCard: React.FC<IEventDetailsCardProps> = ({status, text, id, projects, title, onChangeStatus}) => {
  return (
    <div className="city-details">
      <CheckAccess
        accessRights={UserRoleEnum.admin}
        render={({access}: ICheckAccessApi)=>(<SelectStatusWithSelect
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
        />)}
      />

      <Link className="city-details__title" to={`/event/${id}`}>
        {title}
      </Link>
      <TagList
        projects={projects}
      />
      <div className="city-details__text">
        {text && text.slice(0, 124) + '...'}
      </div>
    </div>
  );
};

export default EventDetailsCard;