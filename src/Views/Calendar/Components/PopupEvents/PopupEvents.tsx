import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import EventList from '../EventList/EventList';
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';
import {IEvent, IReceptionCalendar} from "../../../../Apollo/schema";
import {EventDateFormat} from '../../../Events/Helpers/EventDateFormat';

interface IPopupEventsProps extends IPopupHoc {
  events: IEvent[];
  reception?: IReceptionCalendar;
  date?: string;
  [prop: string]: any
}

const PopupEvents: React.FC<IPopupEventsProps> = ({isOpen,events, onClose, onOpen, Button, date,reception}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        isOpen={isOpen}
        onClose={onClose}
        className="popup--city-details"
        title={reception && reception.reception.city}
        subtitle={date && EventDateFormat(date)}
      >
        <EventList
          events={events}
        />
      </PopupWrapper>
      {
        Button &&
        <Button onClick={onOpen}/>
      }
    </React.Fragment>
  );
};

export default PopupHoc(PopupEvents)({excludeWrapper: 'popup'});