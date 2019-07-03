import * as React from 'react';
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import PopupHoc, {IPopupHoc} from '../../../../Components/PopupHOC/PopupHOC';
import FormCreateProject from '../FormCreateProject/FormCreateProject';
import EditIcon from "../../../../Assets/img/spritesvg/edit.svg";

interface IPopupAddProjectProps extends IPopupHoc {
  [prop: string]: any
}

const PopupEditProject: React.FC<IPopupAddProjectProps> = ({isOpen,onOpen, onClose}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Редактировать проект'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--add-project"
      >
        <FormCreateProject/>
      </PopupWrapper>
      <a href="javascript:void(0);" onClick={onOpen} className="notifications-item__edit ">
        <img src={EditIcon} className="icon icon-edit "/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(PopupEditProject)({excludeWrapper: 'popup'});