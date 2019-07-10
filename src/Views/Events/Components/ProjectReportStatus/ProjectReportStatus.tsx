import * as React from 'react';
import classNames from 'classnames';
import {Arrow} from '../../../../Components/SvgIcons/Arrow';
import {GetObjectByKey} from '../../../../Helpers/GetObjectByKey';
import {EventStatusEnum} from "../../../../Apollo/schema";

interface IProjectReportStatusProps {
  status: EventStatusEnum | string,

  [prop: string]: any
}


export const ProjectReportStatus: React.FC<IProjectReportStatusProps> = ({status, wrapperRef, onClick, date}) => (
  <a
    onClick={onClick}
    className={
      classNames("inner-info__status ", {
        "inner-info__status--withdate": date,
        "inner-info__status--report": status === EventStatusEnum.waitReport,
        "inner-info__status--no-report": status === EventStatusEnum.noReport,
        "inner-info__status--ok": status === EventStatusEnum.ok,
        "inner-info__status--review": status === EventStatusEnum.waitReview,
      })
    }
    href="javascript:void(0);">
			<span>{
        GetObjectByKey({
          report: status === EventStatusEnum.waitReport,
          review: status === EventStatusEnum.waitReview,
          noReport: status === EventStatusEnum.noReport,
          ok: status === EventStatusEnum.ok,
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
