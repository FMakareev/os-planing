import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Components/PopupHOC/PopupHOC";
import DeleteIcon from "../../../../Assets/img/spritesvg/delete.svg";
import {Button} from "../../../../Components/Button/Button";
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';

interface IPopupDeleteProps extends IPopupHoc {
  [prop: string]: any
}

const PopupDelete: React.FC<IPopupDeleteProps> = ({isOpen, onClose, onOpen}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Вы уверены?'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--delete"
      >
        <div className="button-links">
          <Button onClick={onClose} type={'button'}>
            Отмена
          </Button>
          <Button onClick={onClose} type={'button'}>
            Да
          </Button>
        </div>
      </PopupWrapper>
      <a onClick={onOpen} className="notifications-item__delete" href="javascript:void(0);">
        <img src={DeleteIcon} className="icon icon-delete"/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(PopupDelete)({excludeWrapper: 'popup'});