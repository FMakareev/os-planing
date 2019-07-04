import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import {Button} from "../../../../Components/Button/Button";
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import FormCreateUser from "../FormCreateUser/FormCreateUser";
import CreateUser from "../../Enhancers/CreateReception/CreateReception";
import {MutateProps} from "react-apollo";

interface IPopupAddUserProps extends IPopupHoc, MutateProps {
  onSubmit: any;

  [prop: string]: any
}

const PopupAddUser: React.FC<IPopupAddUserProps> = ({isOpen, onClose, onSubmit, onOpen, result}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Добавить пользователя'}
        isOpen={isOpen}
        onClose={onClose}
        className={"popup--add-user"}
      >
        <FormCreateUser
          {...result}
          onSubmit={onSubmit}
        />
      </PopupWrapper>
      <div className="buttons-block">
        <Button onClick={onOpen}>
          Добавить
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PopupHoc(CreateUser(PopupAddUser))({excludeWrapper: 'popup'});