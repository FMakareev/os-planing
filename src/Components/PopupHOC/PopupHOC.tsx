import * as React from 'react';
import {FindClassInPath} from "../../Helpers/FindClassInPath";
import Logging from "../../Helpers/Logging";

export interface IPopupHoc {
  onOpen?(): void;

  onClose?(): void;

  onToggle?(): void;

  isOpen: boolean;
}

interface IPopupHocOptions {
  /** css класс обертки компонента при клике в котором не должно вызыватся события скрытия */
  excludeWrapper?: string;
  enableEventListener?: boolean;
}


interface IPopupHocState {
  isOpen: boolean;

  [prop: string]: any
}

const PopupHoc = (WrapperComponent: React.ElementType) => (options: IPopupHocOptions) => {
  return class extends React.Component<any, IPopupHocState> {

    state: IPopupHocState = {
      isOpen: false,
    };

    /** ссылка на дом элемент в отором рендерится приложение */
    app: any = null;

    constructor(props: any) {
      super(props);
      this.app = document.getElementById('root');
    }

    /**
     * @desc метод необходим для реализации закрытия селекта при клике вне области селекта,
     * вешается на событие onCLick на дом элемент в котором рендерится приложение
     * */
    onClickEventHandler = (event: any) => {
      try {
        if (Array.isArray(event.path)) {
          if (FindClassInPath(event.path, options.excludeWrapper || '') === -1) {
            this.onToggle();
            return
          }
        }
      } catch (error) {
        Logging(error, 'error');
      }
    };

    /** @desc удалить слушатель клика с дом элемент приложения */
    removeClickEventHandler = () => {
      if (options.enableEventListener) {
        this.app && this.app.removeEventListener('click', this.onClickEventHandler);
      }
    };
    /** @desc добавить слушатель клика на дом элемент приложения */
    addClickEventHandler = () => {
      if (options.enableEventListener) {
        this.app && this.app.addEventListener('click', this.onClickEventHandler);
      }
    };

    onOpen = () => {
      this.addClickEventHandler();
      this.setState(() => ({
        isOpen: true,
      }))
    };

    onClose = () => {
      this.removeClickEventHandler();
      this.setState(() => ({
        isOpen: false,
      }))
    };

    onToggle = () => {
      if (this.state.isOpen) {
        this.onClose();
      } else if (!this.state.isOpen) {
        this.onOpen();
      }
    };

    render() {
      const {isOpen} = this.state;
      console.log(options);
      return (<WrapperComponent
        isOpen={isOpen}
        onOpen={this.onOpen}
        onClose={this.onClose}
        onToggle={this.onToggle}
        {...this.props}
      />)
    }
  }
};

export default PopupHoc;