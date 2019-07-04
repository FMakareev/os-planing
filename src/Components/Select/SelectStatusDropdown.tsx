import * as React from 'react';
import {ReportStatusEnum} from '../../Views/Project/Components/ProjectReportStatus/ProjectReportStatus';
import classNames from 'classnames';

interface ISelectStatusDropdownProps {
  [prop: string]: any
}

const SelectStatusDropdown: React.FC<ISelectStatusDropdownProps> = ({
                                                                      options,
                                                                      active,
                                                                      onChange,
                                                                      selected,
                                                                      styleScrollbars,
                                                                      meta,
                                                                      onMenuHover,
                                                                    }) => {
  return (
    <div className={classNames("inner-info__status-hidden", {
      'inner-info__status-hidden--active': active
    })}>
      <a
        onClick={() => onChange && onChange({
          label: ReportStatusEnum.ok,
          value: ReportStatusEnum.ok,
        })}
        className={"ok"}
        href="javascript:void(0);"
      >
        Одобрено
      </a>
      <a
        onClick={() => onChange && onChange({
          label: ReportStatusEnum.report,
          value: ReportStatusEnum.report,
        })}
        className={"report"}
        href="javascript:void(0);">
        Ожидает отчета
      </a>
      <a
        onClick={() => onChange && onChange({
          label: ReportStatusEnum.review,
          value: ReportStatusEnum.review,
        })}
        className={'review'}
        href="javascript:void(0);"
      >
        Ожидает проверки
      </a>
      <a
        onClick={() => onChange && onChange({
          label: ReportStatusEnum.noReport,
          value: ReportStatusEnum.noReport,
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