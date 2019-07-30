import * as React from 'react';
import {TextFieldPassword} from '../TextFieldPassword/TextFieldPassword';
import {Button} from '../../../../Components/Button/Button';
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {ReactNode} from "react";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import createDecorator from "final-form-focus";

interface IFormChangePasswordProps {
  initialValues: IFormChangePasswordState;

  [prop: string]: any
}

interface IFormChangePasswordState {
  id?: string;
  oldPassword?: string;
  newPassword?: string;
  retypeNewPassword?: string;
}

interface IFormChangePasswordValidation {
  oldPassword?: string;
  newPassword?: string;
  retypeNewPassword?: string;
}

const FormChangePasswordValidation = (values: IFormChangePasswordState) => {
  const errors: IFormChangePasswordValidation = {};

  if (!values.oldPassword) {
    errors.oldPassword = 'Обязательно для заполнения';
  }
  if (!values.newPassword) {
    errors.newPassword = 'Обязательно для заполнения';
  }
  if (values.newPassword && values.newPassword.length < 8) {
    errors.newPassword = 'Не менее 8 символов';
  }
  if (!values.retypeNewPassword) {
    errors.retypeNewPassword = 'Обязательно для заполнения';
  }
  if (values.retypeNewPassword && values.retypeNewPassword.length < 8) {
    errors.retypeNewPassword = 'Не менее 8 символов';
  }
  if (values.retypeNewPassword && values.retypeNewPassword.length >= 8 &&
    values.newPassword && values.newPassword.length >= 8 &&
    values.retypeNewPassword !== values.newPassword) {
    errors.retypeNewPassword = 'пароли не совпадают';
  }
  return errors;
};
const focusOnError = createDecorator();


export const FormChangePassword: React.FC<IFormChangePasswordProps> = ({onSubmit, loading, initialValues}) => (
  <Form
    initialValues={initialValues}
    validate={FormChangePasswordValidation}
    decorators={[focusOnError]}
    onSubmit={onSubmit}
    render={({
               submitError,
               handleSubmit,
               form,
               submitting,
               pristine,
             }: FormRenderProps<IFormChangePasswordState>): ReactNode => {

      return (<form onSubmit={handleSubmit} className="form form--password">
        <Field
          name="oldPassword"
          type="password"
          placeholder="Введите свой текущий пароль"
          label={'Текущий пароль'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextFieldPassword {...props}/>)
          }
        </Field>
        <Field
          name="newPassword"
          type="password"
          placeholder="Придумайте новый пароль"
          label={'Новый пароль'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextFieldPassword {...props}/>)
          }
        </Field>
        <Field
          name="retypeNewPassword"
          type="password"
          placeholder="Повторите новый пароль"
          label={'Повторите пароль'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextFieldPassword {...props}/>)
          }
        </Field>
        {submitError && <InvalidFeedback error={submitError}/>}

        <div className="button-links">
          <Button mods={'button-primary--preloader'} disabled={pristine || loading} type={'submit'}>
            Изменить пароль {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
          </Button>
        </div>
      </form>)
    }}
  />
);

export default FormChangePassword;
