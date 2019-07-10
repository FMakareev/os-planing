import * as React from 'react';

import SelectStatus from "../../../../Components/Select/SelectStatus";
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import {EventStatusEnum, IEvent, UserRoleEnum} from '../../../../Apollo/schema';
import {Link} from "react-router-dom";
import TagList from '../../../../Components/TagList/TagList';
import CheckAccess from "../../../../Enhancers/CheckAccess/CheckAccess";

export interface IEventDetailsCardProps extends IEvent {

  [prop: string]: any
}

// TODO: доодумать реализацию проверки прав доступа
const SelectStatusWithSelect = CheckAccess(withSelect(SelectStatus)())(UserRoleEnum.admin);

const EventDetailsCard: React.FC<IEventDetailsCardProps> = ({status, text, id, projects, title, onChangeStatus}) => {
  return (
    <div className="city-details">
      <SelectStatusWithSelect
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