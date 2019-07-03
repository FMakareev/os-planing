import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Components/PopupHOC/PopupHOC";
import {Button} from "../../../../Components/Button/Button";
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import FormCreateUser from "../FormCreateUser/FormCreateUser";

interface IPopupAddUserProps extends IPopupHoc {
  [prop: string]: any
}

const PopupAddUser: React.FC<IPopupAddUserProps> = ({isOpen, onClose, onOpen}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Добавить пользователя'}
        isOpen={isOpen}
        onClose={onClose}
        className={"popup--add-user"}
      >
        <FormCreateUser/>
      </PopupWrapper>
      <div className="buttons-block">
        <Button onClick={onOpen}>
          Добавить
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PopupHoc(PopupAddUser)({excludeWrapper: 'popup'});