import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import EventDetailsCard from '../EventDetailsCard/EventDetailsCard';
import {IEvent} from "../../../../Apollo/schema";
import ChangeStatusEvent from '../../Enhancers/ChangeStatusEvent/ChangeStatusEvent';

interface IEventListProps {
  events: IEvent[];

  [prop: string]: any
}

const EventDetailsCardWithQuery = ChangeStatusEvent(EventDetailsCard);

const EventList: React.FC<IEventListProps> = ({events}) => {
  return (
    <div className={'popup__content'}>
      <Scrollbars style={{
        height: '630px'
      }}>
        {
          events && events.map((event: IEvent, idx: number) => (<EventDetailsCardWithQuery
            key={idx}
            {...event}
          />))
        }
      </Scrollbars>
    </div>
  );
};

export default EventList;