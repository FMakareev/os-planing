import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import {Button} from "../../../../Components/Button/Button";
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';
import DeleteIcon from '../../../../Components/SvgIcons/DeleteIcon';

interface IPopupDeleteProps extends IPopupHoc {
  onDelete?(id: string, callback: any): string;

  buttonLabel?: string;

  [prop: string]: any
}

const PopupDelete: React.FC<IPopupDeleteProps> = ({isOpen, onClose, onOpen, onDelete, user, buttonLabel}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        onCloseBtnId={'PopupDeleteUserBtnClose'}
        title={'Вы уверены?'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--delete"
      >
        <div className="button-links">
          <Button
            id={'DeleteUserBtnCancel'}
            onClick={onClose}
            type={'button'}
          >
            Отмена
          </Button>
          <Button
            onClick={() => {
              onDelete && onDelete(user.id, onClose);
            }}
            type={'button'}
            id={'DeleteUserBtnOk'}
          >
            Да
          </Button>
        </div>
      </PopupWrapper>
      <a
        id={`ButtonOpenFormDeleteUser-${user && user.email}`}
        onClick={onOpen}
        className="notifications-item__delete"
        href="javascript:void(0);"
      >
        <DeleteIcon style={{marginRight: '16px'}} className="icon icon-delete"/> {buttonLabel}
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(PopupDelete)({excludeWrapper: 'popup'});