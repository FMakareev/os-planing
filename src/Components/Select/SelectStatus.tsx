import * as React from 'react';
import ProjectReportStatus from "../../Views/Events/Components/ProjectReportStatus/ProjectReportStatus";
import SelectStatusDropdown from './SelectStatusDropdown';
import {ISelectBaseAPI} from "./withSelect";
import {SelectDropDownList} from "./SelectDropDownList";

interface ISelectStatusProps extends ISelectBaseAPI {
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
                                                    }) => {
  return (
    <div className={'inner-info__status-wrap'}>
      <ProjectReportStatus
        status={!Array.isArray(value) ?value.value: ''}

        onClick={() => {
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
        status={!Array.isArray(value) ?value.value: ''}
        labelKey={labelKey}
        valueKey={valueKey}
      />
    </div>
  );
};

export default SelectStatus;