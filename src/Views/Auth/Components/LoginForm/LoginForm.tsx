import * as React from 'react';
import {Form, Field, FormRenderProps, FieldProps} from 'react-final-form'
import {Button} from '../../../../Components/Button/Button';
import {ReactNode} from 'react';
import {TextField} from '../../../../Components/TextField/TextField';
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface ILoginFormProps {
  onSubmit(values: any): Promise<any>;
  loading: boolean;
  [prop: string]: any
}

export interface LoginFormState {
  login?: string ;
  password?: string;
}

const LoginFormValidate = (values: LoginFormState) => {
  const errors: LoginFormState = {};

  if (!values.login) {
    errors.login = 'Обязательно для заполнения'
  }
  if (!values.password) {
    errors.password = 'Обязательно для заполнения'
  }
  return errors
};


const LoginForm: React.FC<ILoginFormProps> = ({
                                                onSubmit,
                                                loading
                                              }) => {
  return (
    <Form
      validate={LoginFormValidate}
      onSubmit={onSubmit}
      render={({
                 submitError,
                 handleSubmit,
                 invalid,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              name="login"
              type="text"
              placeholder="Введите e-mail"
              label={'Логин'}
              disabled={loading}
            >
              {
                (props: FieldProps<any, any>) => (<TextField {...props}/>)
              }
            </Field>
            <Field
              name="password"
              type="password"
              placeholder="Введите пароль"
              label={'Пароль'}
              disabled={loading}
            >
              {
                (props: FieldProps<any, any>) => (<TextField {...props}/>)
              }
            </Field>
            {submitError && <InvalidFeedback error={submitError}/>}
            <Button
              type="submit"
              disabled={pristine || loading}
              mods="button--wide form__button button-primary--preloader"
            >
              Войти {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
            </Button>
          </form>)
      }}
    />
  );
};

export default LoginForm;