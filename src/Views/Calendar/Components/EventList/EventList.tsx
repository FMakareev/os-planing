import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import CityDetailsCard from '../CityDetailsCard/CityDetailsCard';
import {ReportStatusEnum} from "../../../Project/Components/ProjectReportStatus/ProjectReportStatus";

interface IEventListProps {
  [prop: string]: any
}

const EventList: React.FC<IEventListProps> = () => {
  return (
    <div className={'popup__content'}>
      <Scrollbars style={{
        height: '630px'
      }}>
        <CityDetailsCard status={ReportStatusEnum.ok}/>
        <CityDetailsCard status={ReportStatusEnum.report}/>
        <CityDetailsCard status={ReportStatusEnum.review}/>
      </Scrollbars>
    </div>
  );
};

export default EventList;