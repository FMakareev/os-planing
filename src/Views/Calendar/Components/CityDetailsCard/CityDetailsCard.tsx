import * as React from 'react';
import {
  ProjectReportStatus,
  ReportStatusEnum
} from '../../../Project/Components/ProjectReportStatus/ProjectReportStatus';

export interface ICityDetailsCardProps {
  status: ReportStatusEnum;
  id?: string;
  projects?: string[];
  description?: string;
  [prop: string]: any
}

const CityDetailsCard: React.FC<ICityDetailsCardProps> = ({status}) => {
  return (
    <div className="city-details">
      <ProjectReportStatus
        status={status}
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