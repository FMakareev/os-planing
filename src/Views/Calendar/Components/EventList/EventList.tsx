import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import EventDetailsCard from '../EventDetailsCard/EventDetailsCard';
import {IEvent} from "../../../../Apollo/schema";
import ChangeStatusEvent from '../../Enhancers/ChangeStatusEvent/ChangeStatusEvent';
import {useEffect, useState} from "react";

interface IEventListProps {
  events: IEvent[];

  [prop: string]: any
}

const EventDetailsCardWithQuery = ChangeStatusEvent(EventDetailsCard);

const EventList: React.FC<IEventListProps> = ({events}) => {

  const [height, setHeight] = useState(window.innerHeight * 0.65);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight * 0.65)
    })
  }, []);

  return (
    <div className={'popup__content'}>
      <Scrollbars
        style={{
          height: height
        }}
      >
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
