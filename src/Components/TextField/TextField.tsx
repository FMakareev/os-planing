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
  const Field = as === 'textarea' ? 'textarea' : 'input';
  const error = meta && meta.touched ? meta.error || meta.submitError : null;
  return (
    <React.Fragment>

      <div className={classNames("form__group", mods, {
        'disabled': disabled,
      })}>
        <Field
          className={classNames("form__input", {
            'error': error,
          })}
          placeholder={placeholder}
          disabled={disabled}
          {...input}
          type={type}
        />
        {
          label && <TextFieldLabel label={label} error={error}/>
        }
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
      </div>

      {
        help && <div className="form__group-text">
          {help}
        </div>
      }


    </React.Fragment>);
}

export default TextField;
