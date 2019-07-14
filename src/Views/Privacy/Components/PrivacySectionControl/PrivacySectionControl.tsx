import * as React from 'react';
import PopupHoc, {IPopupHoc} from "../../../../Enhancers/PopupHOC/PopupHOC";
import PrivacyDeleteEnhancer from "../../Enhancers/PrivacyDeleteEnhancer/PrivacyDeleteEnhancer";
import Button, {ButtonStyleEnum} from "../../../../Components/Button/Button";
import PopupWrapper from '../../../../Components/PopupWrapper/PopupWrapper';

interface IPrivacySectionControlProps extends IPopupHoc {
  [prop: string]: any
}

const PrivacySectionControl: React.FC<IPrivacySectionControlProps> = ({
                                                                        isOpen,
                                                                        onClose,
                                                                        onOpen,
                                                                        toggleEditMode,
                                                                        id,
                                                                        onDelete
                                                                      }) => {
  return (
    <React.Fragment>
      <PopupWrapper
        title={'Вы уверены?'}
        isOpen={isOpen}
        onClose={onClose}
        className="popup--delete"
      >
        <div className="button-links">
          <Button
            styles={{marginBottom: '30px'}}
            style={ButtonStyleEnum.border} onClick={onClose} type={'button'}>
            Отмена
          </Button>
          <Button onClick={() => {
            onDelete && onDelete(id, onClose);
          }} type={'button'}>
            Да
          </Button>
        </div>
      </PopupWrapper>
      <div className="button-links">
        <Button onClick={toggleEditMode}>
          Редактировать
        </Button>

        <Button styles={{marginBottom: '30px'}} style={ButtonStyleEnum.border} onClick={onOpen}>
          Удалить
        </Button>

      </div>
    </React.Fragment>
  );
};

export default PopupHoc(PrivacyDeleteEnhancer(PrivacySectionControl))({excludeWrapper: 'popup'});