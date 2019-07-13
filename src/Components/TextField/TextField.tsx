import * as React from 'react';
import {FieldInputProps, FieldMetaState} from 'react-final-form';
import classNames from 'classnames';
import SaveIcon from "../../Assets/img/spritesvg/save.svg";
import {InvalidFeedback} from '../InvalidFeedback/InvalidFeedback';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';

export interface ITextFieldProps {
  input?: FieldInputProps<string, any>;
  meta?: FieldMetaState<any>;
  placeholder?: string;
  label?: string;
  mods?: string;
  help?: string;
  isSave?: boolean;
  as?: string;

  [prop: string]: any
}

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
                                                     }) => {

  const [isFocus, toggleFocus] = React.useState(false);

  const Field = as === 'textarea' ? 'textarea' : 'input';
  const error = meta && meta.touched ? (meta.error || meta.submitError) : null;

  return (
    <React.Fragment>

      <div className={classNames("n-form__group")}>
        <label className={classNames('n-form__input-container',mods, {
          'n-form__input-container--error': error,
          'n-form__input-container--disabled': disabled,
          'n-form__input-container--focus': isFocus || isSave,
        })}>
          {
            label && <TextFieldLabel disabled={disabled} label={label} error={error}/>
          }
          <Field
            className={classNames("n-form__input", {
              'n-form__input--error': error,
              'n-form__input--disabled': disabled,
            })}
            placeholder={placeholder}
            disabled={disabled}
            {...input}
            onFocus={(event: any)=>{
              input && input.onFocus(event);
              console.log('onFocus');
              toggleFocus(true)
            }}
            onBlur={(event: any)=>{
              input && input.onFocus(event);
              console.log('onBlur');
              toggleFocus(false)
            }}
            type={type}
          />
          {
            isSave && <div className="form__save">
                <img src={SaveIcon} className="icon icon-save"/>
                Сохранено
            </div>
          }
          {
            error && (<InvalidFeedback error={error}/>)
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
}

export default TextField;
