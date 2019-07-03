import * as React from 'react';

interface IReportContentCellProps {
	label: string;
	content: string;
	[prop: string]: any
}

export const ReportContentCell: React.FC<IReportContentCellProps> = ({label, content}) => (
	<div className="form__group form__group--text">
		<div className="form__input">
			{content}
		</div>
		<label className="form__label">{label}</label>
	</div>
);

export default ReportContentCell;
