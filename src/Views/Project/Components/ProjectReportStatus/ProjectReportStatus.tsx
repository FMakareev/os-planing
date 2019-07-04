import * as React from 'react';
import classNames from 'classnames';
import {Arrow} from '../../../../Components/SvgIcons/Arrow';
import {GetObjectByKey} from '../../../../Helpers/GetObjectByKey';

export enum ReportStatusEnum {
  ok = 'ok',
  report = 'report',
  noReport = 'noReport',
  review = 'review',
}

interface IProjectReportStatusProps {
  status: ReportStatusEnum | string,

  [prop: string]: any
}


export const ProjectReportStatus: React.FC<IProjectReportStatusProps> = ({status, wrapperRef, onClick, date}) => (
  <a
    onClick={onClick}
    className={
      classNames("inner-info__status ", {
        "inner-info__status--withdate": date,
        "inner-info__status--report": status === ReportStatusEnum.report,
        "inner-info__status--no-report": status === ReportStatusEnum.noReport,
        "inner-info__status--ok": status === ReportStatusEnum.ok,
        "inner-info__status--review": status === ReportStatusEnum.review,
      })
    }
    href="javascript:void(0);">
			<span>{
        GetObjectByKey({
          report: status === ReportStatusEnum.report,
          review: status === ReportStatusEnum.review,
          noReport: status === ReportStatusEnum.noReport,
          ok: status === ReportStatusEnum.ok,
        }, {
          report: 'Ожидает отчета',
          review: 'Ожидает проверки',
          noReport: 'Не ребует отчет',
          ok: 'Одобрено',
        })
      }</span>
    <span className="icon icon-arrow ">
				<Arrow/>
			</span>
  </a>
);

export default ProjectReportStatus;
