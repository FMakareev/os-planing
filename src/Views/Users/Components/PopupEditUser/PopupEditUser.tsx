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

const PopupEditUser: React.FC<IPopupEditUserProps> = ({isOpen, onClose, onOpen, initialValues, result, onSubmit, loading}) => {

  return (
    <React.Fragment>
      {
        isOpen && <PopupWrapper
            title={'Изменить пользователя'}
            onCloseBtnId={'PopupEditUserBtnClose'}
            isOpen={isOpen}
            onClose={() => {
              const form = document.getElementById('FormEditUser');
              form && form.dispatchEvent(new Event('reset', {cancelable: true}));
              onClose && onClose()
            }}
            className="popup--add-user"
        >
            <FormEditUser
                loading={loading}
                onClose={onClose}
                onSubmit={onSubmit}
                initialValues={initialValues}
            />
        </PopupWrapper>
      }

      <a data-edit-reception-btn={initialValues.email} href="javascript:void(0);" onClick={onOpen}
         className="notifications-item__edit ">
        <img src={EditIcon} className="icon icon-edit "/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(UpdateReception(PopupEditUser))({excludeWrapper: 'popup'});