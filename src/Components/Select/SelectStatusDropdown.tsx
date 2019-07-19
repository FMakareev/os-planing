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
                                                                      labelKey,
                                                                      valueKey,
                                                                    }) => {
  return (
    <div className={classNames("inner-info__status-hidden", {
      'inner-info__status-hidden--active': active
    })}>
      {
        options && options.map((item: any, idx: number) => (<a
          key={idx}
          onClick={() => onChange && onChange(item)}
          className={classNames({
            'ok': item[valueKey] === EventStatusEnum.ok,
            'report': item[valueKey] === EventStatusEnum.waitReport,
            'review': item[valueKey] === EventStatusEnum.waitReview,
            'no-review': item[valueKey] === EventStatusEnum.noReport,
          })}
          href="javascript:void(0);"
        >
          {item[labelKey]}
        </a>))
      }
    </div>
  );
};

export default SelectStatusDropdown;