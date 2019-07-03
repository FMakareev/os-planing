import * as React from 'react';
import {Form, Field, FieldProps, FormRenderProps} from 'react-final-form'
import {ReactNode} from "react";
import {TextField} from "../../../../Components/TextField/TextField";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import {Button} from "../../../../Components/Button/Button";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";


interface FormCreateUserState {
  city?: string;
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}


interface IFormCreateUserProps {
  [prop: string]: any
}

const FormCreateUserValidate = (values: FormCreateUserState) => {
  const errors: FormCreateUserState = {};

  if (!values.city) {
    errors.city = 'Обязательно для заполнения'
  }
  if (!values.name) {
    errors.name = 'Обязательно для заполнения'
  }
  if (!values.email) {
    errors.email = 'Обязательно для заполнения'
  }
  if (!values.password) {
    errors.password = 'Обязательно для заполнения'
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Обязательно для заполнения'
  }

  if (values.password && values.password.length < 8) {
    errors.password = 'Пароль должен быть не менее 8 символов'
  }
  if (values.passwordConfirm && values.passwordConfirm.length < 8) {
    errors.passwordConfirm = 'Пароль должен быть не менее 8 символов'
  }

  if (values.password && values.passwordConfirm && values.password != values.passwordConfirm) {
    errors.passwordConfirm = 'пароль не совпадают'
  }


  return errors
};

const FormCreateUser: React.FC<IFormCreateUserProps> = () => {
  return (
    <Form
      validate={FormCreateUserValidate}
      onSubmit={() => {
      }}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => {
        return (<form onSubmit={handleSubmit} className="form">
          <Field
            name="city"
            type="text"
            placeholder="Название города"
            label={'Приемная'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            name="name"
            type="text"
            placeholder="Фамилия Имя Отчество"
            label={'Имя пользователя'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            name="email"
            type="email"
            placeholder="name@gmail.com"
            label={'E-mail пользователя'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            name="password"
            type="password"
            placeholder="Не менее 8 символов"
            label={'Пароль пользователя'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Не менее 8 символов"
            label={'Повторите пароль'}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          {submitError && <InvalidFeedback error={submitError}/>}

          <Button mods={'button-primary--preloader'} disabled={pristine} type={'submit'}>
            Сохранить <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>
          </Button>
        </form>)
      }}
    />

  );
};

export default FormCreateUser;