import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import EventList from '../EventList/EventList';
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';
import {IEvent} from "../../../../Apollo/schema";

interface IPopupEventsProps extends IPopupHoc {
  events: IEvent[];
  [prop: string]: any
}

const PopupEvents: React.FC<IPopupEventsProps> = ({isOpen,events, onClose, onOpen, Button}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        isOpen={isOpen}
        onClose={onClose}
        className="popup--city-details"
      >
        <EventList
          events={events}
        />
      </PopupWrapper>
      <Button onClick={onOpen}/>
    </React.Fragment>
  );
};

export default PopupHoc(PopupEvents)({excludeWrapper: 'popup'});