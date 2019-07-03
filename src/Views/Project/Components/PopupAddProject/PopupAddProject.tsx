import * as React from 'react';
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import PopupHoc, {IPopupHoc} from '../../../../Components/PopupHOC/PopupHOC';
import {Button} from "../../../../Components/Button/Button";
import FormCreateProject from '../FormCreateProject/FormCreateProject';

interface IPopupAddProjectProps extends IPopupHoc {
  [prop: string]: any
}

const PopupAddProject: React.FC<IPopupAddProjectProps> = ({isOpen,onOpen, onClose}) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Добавить проект'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--add-project"
      >
        <FormCreateProject/>
      </PopupWrapper>
      <div className="buttons-block">
        <Button onClick={onOpen}>
          Добавить
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PopupHoc(PopupAddProject)({excludeWrapper: 'popup'});