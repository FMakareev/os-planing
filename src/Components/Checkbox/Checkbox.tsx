import * as React from 'react';
import {FieldInputProps, FieldMetaState} from "react-final-form";

interface ICheckboxProps {
  input?: FieldInputProps<boolean, any>;
  meta?: FieldMetaState<any>;
  [prop: string]: any
}

const Checkbox: React.FC<ICheckboxProps> = ({input, label,disabled}) => {
  return (
    <div className="form__group form__group--checkbox">
      <input
        disabled={disabled}
        id={input && input.name}
        checked={input && (input.checked)}
        onChange={ input && input.onChange}
        onFocus={input && input.onFocus}
        onBlur={input && input.onBlur}
        type={input && input.type}
      />
      <label htmlFor={input && input.name}>{label}</label>
    </div>
  );
};

export default Checkbox;