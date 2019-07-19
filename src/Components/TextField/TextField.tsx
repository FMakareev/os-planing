import * as React from 'react';
import {FieldInputProps, FieldMetaState} from 'react-final-form';
import classNames from 'classnames';
import SaveIcon from "../../Assets/img/spritesvg/save.svg";
import {InvalidFeedback} from '../InvalidFeedback/InvalidFeedback';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';

export interface ITextFieldProps {
  input?: FieldInputProps<any, any>;
  meta?: FieldMetaState<any>;
  placeholder?: string;
  label?: string;
  mods?: string;
  help?: string;
  isSave?: boolean;
  as?: string;

  [prop: string]: any
}


export enum TextFieldEnum {
  SaveField = 'SaveField'
}

const getStatusSubmitSaveField = (meta?: FieldMetaState<any>) => {
  if(meta){
    if(meta.submitError === TextFieldEnum.SaveField){
      return {
        saveField: true,
        message: null,
      }
    }
    return {
      saveField: false,
      message: meta && meta.touched ? (meta.error || meta.submitError) : null,
    }
  }
  return {
    saveField: false,
    message: null,
  }
};

export const TextField: React.FC<ITextFieldProps> = ({
                                                       input,
                                                       type,
                                                       placeholder,
                                                       label,
                                                       mods,
                                                       disabled,
                                                       isSave,
                                                       meta,
                                                       help,
                                                       children,
                                                       as,
                                                       rows,
                                                     }) => {


  const [isFocus, toggleFocus] = React.useState(false);

  const Field = as === 'textarea' ? 'textarea' : 'input';
  // saveField - отвечает за то сохранилось ли текущее поле при запросе к беку или нет, нужно тоб показать какие поля бли сохранен, а какие нет
  // message - текст ошибки
  const {saveField, message} = getStatusSubmitSaveField(meta);

  return (
    <React.Fragment>

      <div className={classNames("n-form__group")}>
        <label className={classNames('n-form__input-container', mods, {
          'n-form__input-container--error': message,
          'n-form__input-container--disabled': disabled,
          'n-form__input-container--focus': isFocus || isSave,
        })}>
          {
            label && <TextFieldLabel disabled={disabled} label={label} error={message}/>
          }
          <Field
            className={classNames("n-form__input", {
              'n-form__input--error': message,
              'n-form__input--disabled': disabled,
            })}
            placeholder={placeholder}
            disabled={disabled}
            {...input}
            onFocus={(event: any) => {
              input && input.onFocus(event);
              toggleFocus(true)
            }}
            onBlur={(event: any) => {
              input && input.onBlur(event);
              toggleFocus(false)
            }}
            rows={rows}
            type={type}
          />
          <div className={classNames("form__save", {

            'd-none': !saveField
          })}>
            <img src={SaveIcon} className="icon icon-save"/>
            Сохранено
          </div>
          {
            message && (<InvalidFeedback error={message}/>)
          }
          {children}
        </label>
      </div>

      {
        help && <div className="form__group-text">
          {help}
        </div>
      }
    </React.Fragment>);
};

export default TextField;
