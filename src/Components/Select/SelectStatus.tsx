import * as React from 'react';
import ProjectReportStatus from "../../Views/Events/Components/ProjectReportStatus/ProjectReportStatus";
import SelectStatusDropdown from './SelectStatusDropdown';
import {ISelectBaseAPI} from "./withSelect";
import {SelectDropDownList} from "./SelectDropDownList";
import {EventStatusEnum} from "../../Apollo/schema";

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
                                                    }) => {
  return (
    <div className={'inner-info__status-wrap'}>
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