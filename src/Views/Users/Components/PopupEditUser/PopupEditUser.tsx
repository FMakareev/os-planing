import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import EditIcon from "../../../../Assets/img/spritesvg/edit.svg";
import FormEditUser from "../FormEditUser/FormEditUser";
import UpdateReception from '../../Enhancers/UpdateReception/UpdateReception';
import {MutateProps} from "react-apollo";

interface IPopupEditUserProps extends IPopupHoc, MutateProps {
  onSubmit: any;

  [prop: string]: any
}

const PopupEditUser: React.FC<IPopupEditUserProps> = ({isOpen, onClose, onOpen,initialValues, result,onSubmit,...rest}) => {
  console.log('PopupEditUser: ',rest);
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Изменить пользователя'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--add-user"
      >
        <FormEditUser {...result} onClose={onClose} onSubmit={onSubmit} initialValues={initialValues}/>
      </PopupWrapper>
      <a href="javascript:void(0);" onClick={onOpen} className="notifications-item__edit ">
        <img src={EditIcon} className="icon icon-edit "/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(UpdateReception(PopupEditUser))({excludeWrapper: 'popup'});