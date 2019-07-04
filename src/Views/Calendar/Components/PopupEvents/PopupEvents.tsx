import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import Button from '../../../../Components/Button/Button';
import EventList from '../EventList/EventList';
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';

interface IPopupEventsProps extends IPopupHoc {
  [prop: string]: any
}

const PopupEvents: React.FC<IPopupEventsProps> = ({isOpen, onClose, onOpen}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Вы уверены?'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--city-details"
      >
        <EventList/>
      </PopupWrapper>
      <Button onClick={onOpen}>
        Открыть
      </Button>
    </React.Fragment>
  );
};

export default PopupHoc(PopupEvents)({excludeWrapper: 'popup'});