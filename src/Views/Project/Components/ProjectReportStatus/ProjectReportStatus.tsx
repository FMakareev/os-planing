import * as React from 'react';
import classNames from 'classnames';
import {Arrow} from '../../../../Components/SvgIcons/Arrow';
import {GetObjectByKey} from '../../../../Helpers/GetObjectByKey';

export enum ReportStatusEnum {
	ok = 'ok',
	report = 'report',
	review = 'review',
}

interface IProjectReportStatusProps {
	status: ReportStatusEnum,

	[prop: string]: any
}


export const ProjectReportStatus: React.FC<IProjectReportStatusProps> = ({status, date}) => (
	<div className={'inner-info__status-wrap'}>
		<a
			className={
				classNames("inner-info__status ", {
					"inner-info__status--withdate": date,
					"inner-info__status--report": status === ReportStatusEnum.report,
					"inner-info__status--ok": status === ReportStatusEnum.ok,
					"inner-info__status--review": status === ReportStatusEnum.review,
				})
			}
			href="javascript:void(0);">
			<span>{
				GetObjectByKey({
					report: status ===ReportStatusEnum.report,
					review: status ===ReportStatusEnum.review,
					ok: status ===ReportStatusEnum.ok,
				}, {
					report: 'Ожидает отчета',
					review: 'Ожидает проверки',
					ok: 'Одобрено',
				})
			}</span>
			<span className="icon icon-arrow ">
				<Arrow/>
			</span>
		</a>
	</div>
);

export default ProjectReportStatus;
