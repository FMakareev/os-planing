import * as React from 'react';
import classNames from 'classnames';
import close from '../../Assets/img/spritesvg/close.svg';
import {IPopupHoc} from "../../Enhancers/PopupHOC/PopupHOC";

interface IPopupWrapperProps extends IPopupHoc {
  className?: string;
  title?: string;
  subtitle?: string;
  isOpen: boolean;

  [prop: string]: any
}

const PopupWrapper: React.FC<IPopupWrapperProps> = ({className, children, isOpen, onClose, subtitle, title}) => {
  return (
    <div onClick={onClose} className={classNames('popupbg', {
      'popupbg--open': isOpen
    })}>
      <div onClick={(event) => {
        event.stopPropagation()
      }} className={classNames("popup", className, {
        'popup--open': isOpen
      })}>
        <a onClick={onClose} className="popup__close">
          <img className={"icon icon-close"} src={close} alt=""/>
        </a>
        {
          title &&
          <div className="popup__title">{title}</div>
        }
        {
          subtitle &&
          <div className="popup__date">{subtitle}</div>
        }
        {children}
      </div>

    </div>
  );
};

export default PopupWrapper;