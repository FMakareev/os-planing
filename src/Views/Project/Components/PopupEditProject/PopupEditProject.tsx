import * as React from 'react';
import PopupWrapper from "../../../../Components/PopupWrapper/PopupWrapper";
import PopupHoc, {IPopupHoc} from '../../../../Enhancers/PopupHOC/PopupHOC';
import EditIcon from "../../../../Assets/img/spritesvg/edit.svg";
import UpdateProjectHOC from "../../Enhancers/UpdateProjectHOC/UpdateProjectHOC";
import FormUpdateProject from "../FormUpdateProject/FormUpdateProject";

interface IPopupAddProjectProps extends IPopupHoc {
  [prop: string]: any
}

const PopupEditProject: React.FC<IPopupAddProjectProps> = ({
                                                             isOpen,
                                                             onOpen,
                                                             initialValues,
                                                             loading,
                                                             onSubmit,
                                                             onClose,
                                                             ...rest
                                                           }) => {
  return (
    <React.Fragment>
      {
        isOpen &&  <PopupWrapper
            title={'Редактировать проект'}
            isOpen={isOpen}
            onClose={() => {
              const form = document.getElementById('FormUpdateProject');
              form && form.dispatchEvent(new Event('reset', {cancelable: true}));
              onClose && onClose()
            }}
            className="popup--add-project"
        >
            <FormUpdateProject
                loading={loading}
                onSubmit={onSubmit}
                onClose={onClose}
                initialValues={initialValues}
            />
        </PopupWrapper>
      }
      <a data-edit-reception-btn={initialValues.name} href="javascript:void(0);" onClick={onOpen} className="notifications-item__edit ">
        <img src={EditIcon} className="icon icon-edit "/>
      </a>
    </React.Fragment>
  );
};

export default PopupHoc(UpdateProjectHOC(PopupEditProject))({excludeWrapper: 'popup'});