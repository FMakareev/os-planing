import * as React from 'react';
import {
  ProjectReportStatus,
  ReportStatusEnum
} from '../../../Project/Components/ProjectReportStatus/ProjectReportStatus';
import SelectStatus from "../../../../Components/Select/SelectStatus";
import withSelect from "../../../../Components/Select/withSelect";
import {IEvent} from '../../../../Apollo/schema';

export interface ICityDetailsCardProps extends IEvent {

  [prop: string]: any
}

const SelectStatusWithSelect = withSelect(SelectStatus)();

const CityDetailsCard: React.FC<ICityDetailsCardProps> = ({status}) => {
  return (
    <div className="city-details">
      <SelectStatusWithSelect
        selected={status}
        options={[
          {
            label: ReportStatusEnum.ok,
            value: ReportStatusEnum.ok
          },
          {
            label: ReportStatusEnum.report,
            value: ReportStatusEnum.report
          },
          {
            label: ReportStatusEnum.review,
            value: ReportStatusEnum.review
          },
          {
            label: ReportStatusEnum.noReport,
            value: ReportStatusEnum.noReport
          },
        ]}

      />
      <a className="city-details__title" href="javascript:void(0);">
        Проект модернизации театра юного зрителя по адресу
        ул. Петропавловская, д. 54
      </a>
      <div className="city-details__tags">
        <div className="city-details__tag">Реновация</div>
        <div className="city-details__tag">Модернизация</div>
        <div className="city-details__tag">Культура</div>
      </div>
      <div className="city-details__text">
        Согласно последним исследованиям, расходящийся ряд упорядочивает стремящийся
        ортогональный определитель. Однако не все знают...
      </div>
    </div>
  );
};

export default CityDetailsCard;