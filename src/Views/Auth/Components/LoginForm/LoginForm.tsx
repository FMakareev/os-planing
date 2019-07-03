import * as React from 'react';
import {Form, Field, FormRenderProps, FieldProps} from 'react-final-form'
import {Button} from '../../../../Components/Button/Button';
import {ReactNode} from 'react';
import {TextField} from '../../../../Components/TextField/TextField';
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";

interface ILoginFormProps {
  onSubmit(values: any): Promise<any>;

  [prop: string]: any
}

export interface LoginFormState {
  email?: string ;
  password?: string;
}

const LoginFormValidate = (values: LoginFormState) => {
  const errors: LoginFormState = {};

  if (!values.email) {
    errors.email = 'Обязательно для заполнения'
  }
  if (!values.password) {
    errors.password = 'Обязательно для заполнения'
  }
  return errors
};


const LoginForm: React.FC<ILoginFormProps> = ({
                                                onSubmit
                                              }) => {
  return (
    <Form
      validate={LoginFormValidate}
      onSubmit={onSubmit}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="text"
            placeholder="Введите e-mail"
            label={'Логин'}
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
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          {submitError && <InvalidFeedback error={submitError}/>}
          <Button type="submit" disabled={pristine} mods="button--wide form__button">
            Войти
          </Button>
        </form>)}
    />
  );
};

LoginForm.defaultProps = {
  onSubmit: (values: any) => new Promise(() => {
  })

}

export default LoginForm;