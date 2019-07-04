import * as React from 'react';
import ProjectReportStatus from "../../Views/Project/Components/ProjectReportStatus/ProjectReportStatus";
import SelectStatusDropdown from './SelectStatusDropdown';
import {ISelectBaseAPI} from "./withSelect";

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
                                                      label,
                                                      placeholder,
                                                      handleInputChange,
                                                      wrapperRef,
                                                    }) => {
  return (
    <div className={'inner-info__status-wrap'}>
      <ProjectReportStatus
        status={value.value}

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
        status={value.value}

      />
    </div>
  );
};

export default SelectStatus;