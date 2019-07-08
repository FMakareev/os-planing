import * as React from 'react';
import {Form, Field, FieldProps, FormRenderProps} from 'react-final-form'
import {ReactNode} from "react";
import {TextField} from "../../../../Components/TextField/TextField";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import {Button, ButtonStyleEnum} from "../../../../Components/Button/Button";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import {MutationResult} from "react-apollo";
import AvatarFields from '../../../../Components/AvatarFields/AvatarFields';


interface FormEditUserState {
  city?: string;
  fullName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}


interface IFormEditUserProps {
  initialValues?: any;
  loading: boolean;

  [prop: string]: any
}

const FormEditUserValidate = (values: FormEditUserState) => {
  const errors: FormEditUserState = {};

  if (!values.city) {
    errors.city = 'Обязательно для заполнения'
  }
  if (!values.fullName) {
    errors.fullName = 'Обязательно для заполнения'
  }
  if (!values.email) {
    errors.email = 'Обязательно для заполнения'
  }
  // if (!values.password) {
  //   errors.password = 'Обязательно для заполнения'
  // }


  if (values.password && values.password.length < 8) {
    errors.password = 'Пароль должен быть не менее 8 символов'
  }

  return errors
};

const FormEditUser: React.FC<IFormEditUserProps> = ({initialValues, onSubmit, onClose, loading}) => {
  return (
    <Form
      initialValues={initialValues}
      validate={FormEditUserValidate}
      onSubmit={onSubmit}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<any>): ReactNode => {

        return (<form
          id={'FormEditUser'}
          onReset={()=>{
            form.reset(initialValues);
          }}
          onSubmit={handleSubmit}
          className="form">
          <Field
            name="city"
            type="text"
            placeholder="Название города"
            label={'Приемная'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>
          <Field
            name="fullName"
            type="text"
            placeholder="Фамилия Имя Отчество"
            label={'Имя пользователя'}
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<TextField {...props}/>)
            }
          </Field>

          <Field
            name="avatar"
            type="file"
            label={'Загрузить фото'}
            disabled={loading}
          >
            {
              (props: FieldProps<any, any>) => (<AvatarFields {...props}/>)
            }
          </Field>

          {submitError && <InvalidFeedback error={submitError}/>}

          <div className="button-links">
            <Button mods={'button-primary--preloader'} disabled={pristine || loading} type={'submit'}>
              Сохранить {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
            </Button>
            <Button
              style={ButtonStyleEnum.border}
              onClick={() => {
                form.reset(initialValues);
                onClose && onClose()
              }}
              type={'button'}
            >
              Отмена
            </Button>
          </div>

        </form>)
      }}
    />

  );
};

export default FormEditUser;