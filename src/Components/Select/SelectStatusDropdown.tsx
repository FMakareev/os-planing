import * as React from 'react';
import classNames from 'classnames';
import {EventStatusEnum} from "../../Apollo/schema";

interface ISelectStatusDropdownProps {
  [prop: string]: any
}

const SelectStatusDropdown: React.FC<ISelectStatusDropdownProps> = ({
                                                                      options,
                                                                      active,
                                                                      onChange,
                                                                    }) => {
  return (
    <div className={classNames("inner-info__status-hidden", {
      'inner-info__status-hidden--active': active
    })}>
      <a
        onClick={() => onChange && onChange({
          label: EventStatusEnum.ok,
          value: EventStatusEnum.ok,
        })}
        className={"ok"}
        href="javascript:void(0);"
      >
        Одобрено
      </a>
      <a
        onClick={() => onChange && onChange({
          label: EventStatusEnum.waitReport,
          value: EventStatusEnum.waitReport,
        })}
        className={"report"}
        href="javascript:void(0);">
        Ожидает отчета
      </a>
      <a
        onClick={() => onChange && onChange({
          label: EventStatusEnum.waitReview,
          value: EventStatusEnum.waitReview,
        })}
        className={'review'}
        href="javascript:void(0);"
      >
        Ожидает проверки
      </a>
      <a
        onClick={() => onChange && onChange({
          label: EventStatusEnum.noReport,
          value: EventStatusEnum.noReport,
        })}
        href="javascript:void(0);"
        className={'no-review'}
      >
        Не требует отчета
      </a>
    </div>
  );
};

export default SelectStatusDropdown;