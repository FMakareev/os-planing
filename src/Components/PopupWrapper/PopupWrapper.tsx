import * as React from 'react';
import classNames from 'classnames';
import close from '../../Assets/img/spritesvg/close.svg';
import {IPopupHoc} from "../../Enhancers/PopupHOC/PopupHOC";
import ReactDOM from 'react-dom';

interface IPopupWrapperProps extends IPopupHoc {
  onCloseBtnId?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  isOpen: boolean;

  [prop: string]: any
}
const ModalRoot: any = document.getElementById('modal-root');




class PopupWrapper extends React.Component<IPopupWrapperProps> {
  el: any;

  constructor(props: IPopupWrapperProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    ModalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    ModalRoot.removeChild(this.el);
  }

  render() {
    const {className, children, isOpen, onClose, subtitle, title,onCloseBtnId}= this.props;

    return ReactDOM.createPortal(
      <div onClick={onClose} className={classNames('popupbg', {
        'popupbg--open': isOpen
      })}>
        <div onClick={(event) => {
          event.stopPropagation()
        }} className={classNames("popup", className, {
          'popup--open': isOpen
        })}>
          <a id={onCloseBtnId} onClick={onClose} className="popup__close">
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
      </div>,
      this.el,
    );
  }
}


export default PopupWrapper;