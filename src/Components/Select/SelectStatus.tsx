import * as React from 'react';
import ProjectReportStatus from "../../Views/Events/Components/ProjectReportStatus/ProjectReportStatus";
import SelectStatusDropdown from './SelectStatusDropdown';
import {ISelectBaseAPI} from "./withSelect";
import {SelectDropDownList} from "./SelectDropDownList";
import {EventStatusEnum} from "../../Apollo/schema";
import classNames from 'classnames';

interface ISelectStatusProps extends ISelectBaseAPI {
  // selected?:EventStatusEnum;
  [prop: string]: any
}

const SelectStatus: React.FC<ISelectStatusProps> = ({
                                                      options,
                                                      selected,
                                                      meta,
                                                      value,
                                                      onFocus,
                                                      onBlur,
                                                      onChange,
                                                      labelKey,
                                                      valueKey,
                                                      disabled,
                                                      className,
                                                      wrapperRef,
                                                    }) => {
  return (
    <div ref={wrapperRef} className={classNames('inner-info__status-wrap', className)}>
      <ProjectReportStatus
        status={!Array.isArray(value) && value ? value.value : ''}
        disabled={disabled}
        onClick={() => {
          if (disabled) return null;
          if (!meta.active) {
            onFocus && onFocus();
          } else {
            onBlur && onBlur();
          }
        }}
      />
      <SelectStatusDropdown
        options={options}
        meta={meta}
        selected={selected}
        active={meta.active}
        onChange={onChange}
        status={!Array.isArray(value) && value ? value.value : ''}
        labelKey={labelKey}
        valueKey={valueKey}
      />
    </div>
  );
};

export default SelectStatus;