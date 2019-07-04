import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import EditIcon from "../../../../Assets/img/spritesvg/edit.svg";
import FormEditUser from "../FormEditUser/FormEditUser";

interface IPopupAddUserProps extends IPopupHoc {
  [prop: string]: any
}

const PopupEditUser: React.FC<IPopupAddUserProps> = ({isOpen, onClose, onOpen}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Изменить пользователя'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--add-user"
      >
        <FormEditUser/>
      </PopupWrapper>
      <a href="javascript:void(0);" onClick={onOpen} className="notifications-item__edit ">
        <img src={EditIcon} className="icon icon-edit "/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(PopupEditUser)({excludeWrapper: 'popup'});