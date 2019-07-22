import React, {RefObject} from 'react';
import {FindClassInPath} from '../../Helpers/FindClassInPath';
import Logging from "../../Helpers/Logging";
import {shallowEqual} from "react-redux";


export interface ISelectOption {
  // value: string;
  // label: string;
  [prop: string]: any;
}

export interface ISelectBaseAPI extends IWithSelectState {
  /** @desc прослушка стейта компонента */
  onChange?(option: ISelectOption): void;

  /** @desc удаление опции по id, работает только если isMulti == true */
  onRemoveValueByIdx?(index: number): void;

  /** @desc прослушка стейта компонента */
  onReset?(): void;

  /** @desc просушать когда срабатывает фокус */
  onFocus?(): void;

  onClick?(): void;

  /** @desc просушать когда срабатывает блюр */
  onBlur?(): void;

  /** @desc реализация поиска по списку опций */
  handleInputChange?(value: string): void;

  onMenuHover?(option: ISelectOption): void;

  onKeyDown?(key: string): void;

  defaultMenuIsOpen?: boolean;
  label?: string;
  /** ссылка на дом элемент выпадающего списка */
  wrapperRef?: RefObject<any>;
  /** ссылка на дом элемент выпадающего списка */
  inputRef?: RefObject<any>;

  /** @desc активная опция*/
  selected?: string;
  /** @desc */
  placeholder?: string;
  /** @desc список опций*/
  options: any[];

  /** текущая выбранная опция */
  value: ISelectOption | ISelectOption[]

  [prop: string]: any;

}


export interface IWithSelectMeta {
  active: boolean;
  focus: boolean;
  /** @desc Идет ли поиск по списку опций */
  filterActive: boolean;
}

export enum WithSelectEventEnum {
  keyboard = 'keyboard',
  mouse = 'mouse',
}


export interface IWithSelectState {
  selected?: any,
  value: ISelectOption | ISelectOption[],
  indexActiveOption: number;
  findSubstring?: string,
  currentEvent?: string, // scroll, keyboard, hover
  meta: IWithSelectMeta;

  [prop: string]: any;
}

export interface IWithSelectProps {
  valueKey: string;
  labelKey: string;
  selected?: any;
  isMulti?: boolean;

  /** @desc */
  [prop: string]: any;
}


export const withSelect = <T extends {}>(WrappedComponent: React.ComponentType | React.ElementType) => () => {
  return class extends React.Component<IWithSelectProps & T, IWithSelectState> {

    static defaultProps = {
      valueKey: 'value',
      labelKey: 'label',
    };

    /** ссылка на дом элемент в отором рендерится приложение */
    app: any = null;
    /** ссылка на дом элемент выпадающего списка */
    wrapperRef: RefObject<any>;
    /** ссылка на дом элемент выпадающего списка */
    inputRef: RefObject<any>;

    constructor(props: IWithSelectProps & T) {
      super(props);
      if (this.props.isMulti) {
        this.state = this.initialStateIsMulti;
      } else {
        this.state = this.initialState;
      }

      this.app = document.getElementById('root');

      this.wrapperRef = React.createRef();
      this.inputRef = React.createRef();
    }


    /** @desc инициализация состояния для стандартного режима */
    get initialState(): IWithSelectState {
      const {
        valueKey,
      } = this.props;

      const indexSelected = this.props.options.findIndex((item: ISelectOption) => item[valueKey] === this.props.selected);
      const selectedOption = indexSelected !== -1 ? this.props.options[indexSelected] : null;

      return {
        selected: this.props.selected,
        value: selectedOption,
        findSubstring: undefined,
        indexActiveOption: indexSelected,
        meta: {
          active: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
          focus: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
          filterActive: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
        }
      };
    }

    /** @desc инициализация состояния для режима множественным выбором опций */
    get initialStateIsMulti(): IWithSelectState {

      let value: any = [];
      if (Array.isArray(this.props.selected) || this.props.selected) {
        value = this.props.selected;
      }
      console.log('initialStateIsMulti this.props: ', this.props);
      console.log('initialStateIsMulti value: ', value);
      return {
        selected: this.props.selected,
        value: value,
        findSubstring: undefined,
        indexActiveOption: -1,
        meta: {
          active: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
          focus: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
          filterActive: this.props.defaultMenuIsOpen !== undefined ? this.props.defaultMenuIsOpen : false,
        }
      };
    }


    UNSAFE_componentWillReceiveProps = (nextProps: IWithSelectProps) => {
      const {
        valueKey,
        options,
        selected,
        isMulti,
      } = nextProps;

      if (!isMulti && selected !== this.props.selected) {
        const indexSelected = options.findIndex((item: ISelectOption) => item[valueKey] === selected);
        const selectedOption = indexSelected !== -1 ? options[indexSelected] : null;
        this.setState((state) => ({
          ...state,
          selected: selected,
          value: selectedOption,
        }));
      }
    };
    /**
     * @desc метод необходим для реализации закрытия селекта при клике вне области селекта,
     * вешается на событие onCLick на дом элемент в котором рендерится приложение
     * */
    onClickEventHandler = (event: any) => {
      try {
        const {meta} = this.state;
        if (Array.isArray(event.path) && meta.active) {
          if (this.wrapperRef.current) {
            if (FindClassInPath(event.path, this.wrapperRef.current.className) === -1) {
              this.onBlur();
              return
            }
          }
        }
      } catch (error) {
        Logging(error, 'error');
      }
    };

    /** @desc удалить слушатель клика с дом элемент приложения */
    removeClickEventHandler = () => {
      this.app && this.app.removeEventListener('click', this.onClickEventHandler);
    };

    /** @desc добавить слушатель клика на дом элемент приложения */
    addClickEventHandler = () => {
      this.app && this.app.addEventListener('click', this.onClickEventHandler);
    };

    /** @desc удаление опции из state.value по индексу, работает только для режима isMulti == true */
    onRemoveValueByIdx = (index: number) => {
      if (this.props.isMulti) {
        this.setState((state: IWithSelectState) => ({
            ...state,
            value: Array.isArray(state.value) ? state.value.filter((_, idx: number) => idx !== index) : [],
            findSubstring: undefined,
          }),
          () => {
            if (this.props && this.props.onChange) {
              this.props.onChange(this.state.value || []);
            }
          });
      }
    };

    /** @desc метод пишет в состояние текущее активное значение options */
    onChange = (option: ISelectOption) => {

      if (this.props.isMulti) {

        this.setState((state: IWithSelectState) => ({
          ...state,
          value: [...(Array.isArray(state.value) ? state.value : [state.value]), option],
          findSubstring: undefined,
        }), () => {
          if (this.props && this.props.onChange) {
            this.props.onChange(this.state.value || []);
          }
        });
      } else {
        this.setState((state: any) => ({
          ...state,
          value: option,
          findSubstring: null,
        }), () => {
          if (this.props && this.props.onChange) {
            this.props.onChange(this.state.value || '');
          }
        });
      }

      this.onBlur();
    };

    /** @desc метод пишет в состояние текущее активное значение options */
    onReset = () => {
      this.setState((state: any) => ({
        ...state,
        value: '',
        findSubstring: null,
      }), () => {
        if (this.props && this.props.onChange) {
          this.props.onChange('');
        }
      });

      this.onBlur();
    };

    /** @desc активация выпадающего списка и в случае использования инпута ставит в нем фокус */
    onFocus = () => {
      this.setState((state: IWithSelectState) => ({
        ...state,
        meta: {
          ...state.meta,
          active: true,
          focus: true,
        }
      }));

      this.addClickEventHandler();

      if (this.inputRef.current) {
        this.inputRef.current.focus();
        if (this.state.value) {
          this.inputRef.current.setSelectionRange(this.state.value.length, this.state.value.length);
        }

      }

      if (this.props && this.props.onFocus) {
        this.props.onFocus();
      }
    };

    /** @desc метод скрывает выпадающий список и убирает фокус с инпута*/
    onBlur = () => {
      this.setState((state: IWithSelectState) => ({
        ...state,
        meta: {
          ...state.meta,
          active: false,
          focus: false,
        }
      }));

      this.removeClickEventHandler();

      if (this.inputRef.current) {
        this.inputRef.current.blur();
      }

      if (this.props && this.props.onBlur) {
        this.props.onBlur();
      }
    };

    /** @desc пишет подстроку из инпута для дальнейшего использования ее в поиске*/
    handleInputChange = (inputValue: string) => {
      this.setState((state: IWithSelectState) => ({
        ...state,
        findSubstring: inputValue,
        meta: {
          ...state.meta,
          filterActive: !!(inputValue)
        }
      }))
    };


    /** @desc фиксирует индекс опции над которой был курсор */
    onMenuHover = (option: ISelectOption) => {
      const {valueKey} = this.props;
      if (option) {
        this.setState({
          indexActiveOption: this.props.options.findIndex((item: ISelectOption) => option[valueKey] === item[valueKey]),
          currentEvent: WithSelectEventEnum.mouse,
        })
      }
    };

    /**
     * @desc перемещение по списку опций, скрол к нужной опции выполняется в компоненте опции
     * */
    onKeyDown = (key: string) => {
      const {meta, findSubstring, indexActiveOption} = this.state;

      const options = this.optionsFilter(this.props.options, meta.focus ? findSubstring : undefined);
      if (options.length === 0) {
        return;
      }
      switch (key) {
        case ('ArrowDown'): {
          if (indexActiveOption >= 0 && indexActiveOption < options.length - 1) {
            this.setState({
              indexActiveOption: indexActiveOption + 1,
              currentEvent: WithSelectEventEnum.keyboard
            });
          } else {
            this.setState({
              indexActiveOption: options.length - 1,
              currentEvent: WithSelectEventEnum.keyboard
            });
          }

          break;
        }
        case ('ArrowUp'): {
          if (indexActiveOption > 0) {
            this.setState({
              indexActiveOption: indexActiveOption - 1,
              currentEvent: WithSelectEventEnum.keyboard
            })
          }
          break;
        }
        case ('Enter'): {
          if (indexActiveOption >= 0 && indexActiveOption !== -1 && indexActiveOption <= options.length - 1) {
            this.onChange(options[indexActiveOption]);
          }
          break;
        }
      }

    };

    /** @desc метод для поиска по подстроке в options, если подстрока пуста возвращает обычный список */
    optionsFilter = (options: ISelectOption[], substring: string | undefined): any[] => {

      const {labelKey, valueKey} = this.props;
      if (this.props.isMulti && Array.isArray(options) && Array.isArray(this.state.value)) {
        return options.filter((option: ISelectOption) => {
          return this.state.value.findIndex((item: any) => item[valueKey] === option[valueKey]) < 0
        })
      }

      if (substring) {
        return Array.isArray(options) ? options.filter((item: ISelectOption) =>
          typeof item[labelKey] === 'string' ? item[labelKey].indexOf(substring) === 0 : false) : [];
      }
      return options;
    };

    render() {
      const {meta, findSubstring} = this.state;
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          onChange={this.onChange}
          onReset={this.onReset}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onMenuHover={this.onMenuHover}
          onKeyDown={this.onKeyDown}
          onRemoveValueByIdx={this.onRemoveValueByIdx}
          wrapperRef={this.wrapperRef}
          inputRef={this.inputRef}
          handleInputChange={this.handleInputChange}
          findSubstring={this.state.findSubstring}
          options={this.optionsFilter(this.props.options, meta.focus ? findSubstring : undefined)}
        />
      );
    }
  };
};


export default withSelect;
