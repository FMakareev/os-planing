import * as React from 'react';
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import PopupHoc, {IPopupHoc} from '../../../../Enhancers/PopupHOC/PopupHOC';
import {Button} from "../../../../Components/Button/Button";
import FormCreateProject from '../FormCreateProject/FormCreateProject';
import AddProjectHoc from "../../Enhancers/AddProjectHOC/AddProjectHOC";


interface IPopupAddProjectProps extends IPopupHoc {
  [prop: string]: any
}


const PopupAddProject: React.FC<IPopupAddProjectProps> = ({
                                                            isOpen,
                                                            onOpen,
                                                            onClose,
                                                            onSubmit,
                                                            loading,
                                                          }) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Добавить проект'}
        isOpen={isOpen}
        onCloseBtnId={'PopupAddProjectBtnClose'}
        onClose={()=>{
          const form = document.getElementById('FormCreateProject');
          form && form.dispatchEvent(new Event('reset', {cancelable: true}));
          onClose && onClose()
        }}
        className="popup--add-project"
      >
        <FormCreateProject
          onSubmit={onSubmit}
          loading={loading}
        />
      </PopupWrapper>
      <div className="buttons-block">
        <Button id={'ButtonAddProject'} onClick={onOpen}>
          Добавить
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PopupHoc(AddProjectHoc(PopupAddProject))({excludeWrapper: 'popup'});