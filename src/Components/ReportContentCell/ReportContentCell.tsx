import * as React from 'react';

interface IReportContentCellProps {
  label: string;
  content: any;

  [prop: string]: any
}

export const ReportContentCell: React.FC<IReportContentCellProps> = ({label, content}) => (
  <React.Fragment>
    <div className="report-cell_title">
      {
        label
      }
    </div>
    <div className="report-cell_text">
      {content}
    </div>
  </React.Fragment>
);

export default ReportContentCell;
