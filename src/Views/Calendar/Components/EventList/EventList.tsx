import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import CityDetailsCard from '../CityDetailsCard/CityDetailsCard';
import {IEvent} from "../../../../Apollo/schema";

interface IEventListProps {
  events: IEvent[];

  [prop: string]: any
}

const EventList: React.FC<IEventListProps> = ({events}) => {
  return (
    <div className={'popup__content'}>
      <Scrollbars style={{
        height: '630px'
      }}>
        {
          events && events.map((event: IEvent, idx: number) => (<CityDetailsCard
            {...event}
          />))
        }
      </Scrollbars>
    </div>
  );
};

export default EventList;