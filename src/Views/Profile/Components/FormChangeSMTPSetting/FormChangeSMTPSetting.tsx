import * as React from 'react';
import {Link} from "react-router-dom";
import LockIcon from "../../../../Assets/img/spritesvg/lock.svg";
import {Button} from "../../../../Components/Button/Button";
import {TextField} from '../../../../Components/TextField/TextField';
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {ReactNode} from "react";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";
import TextFieldPassword from "../../../ChangePassword/Components/TextFieldPassword/TextFieldPassword";
import Checkbox from "../../../../Components/Checkbox/Checkbox";


interface IFormChangeSMTPSettingProps {
  [prop: string]: any
}

export interface IFormChangeSMTPSettingValues {
  email?: string;
  fullName?: string;
  host?: string;
  port?: string;
  login?: string;
  password?: string;
  tlsUse?: boolean;

  [prop: string]: any;
}



interface IFormChangeSMTPSettingValidation {
  host?: string;
  port?: string;
  login?: string;
  password?: string;
  tlsUse?: boolean;
  [prop: string]: any;
}

const FormChangeSMTPSettingValidator = (values: IFormChangeSMTPSettingValues) => {
  const errors:IFormChangeSMTPSettingValidation = {};

  if(!values.host){
    errors.host = 'Обязательно для заполнения';
  }
  if(!values.port){
    errors.port = 'Обязательно для заполнения';
  }

  return errors;
};


export const FormChangeSMTPSetting: React.FC<IFormChangeSMTPSettingProps> = ({initialValues, loading, onSubmit}) => (
  <Form
    validate={FormChangeSMTPSettingValidator}
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({
               submitError,
               handleSubmit,
               form,
               submitting,
               pristine,
             }: FormRenderProps<IFormChangeSMTPSettingValues>): ReactNode => {

      return (<form onSubmit={handleSubmit} className="form form--setting">
        <Field
          name={'fullName'}
          type="text"
          placeholder={'Введите Имя'}
          label={'Имя'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name={'email'}
          type="email"
          placeholder={'Введите e-mail'}
          label={'E-mail'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name={'host'}
          type="text"
          placeholder={'Введите хост SMTP'}
          label={'Хост SMTP'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name={'port'}
          type="text"
          placeholder={'Введите порт SMTP'}
          label={'Порт SMTP'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name={'login'}
          type="text"
          placeholder={'Введите логин SMTP'}
          label={'Пользователь SMTP'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextField {...props}/>)
          }
        </Field>
        <Field
          name={'password'}
          type="password"
          placeholder={'Введите пароль SMTP'}
          label={'Пароль пользователя SMTP'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<TextFieldPassword {...props}/>)
          }
        </Field>
        <Field
          name={'tlsUse'}
          type="checkbox"
          label={'Использовать tls для SMTP'}
          disabled={loading}
        >
          {
            (props: FieldProps<any, any>) => (<Checkbox {...props}/>)
          }
        </Field>

        {
          submitError && <InvalidFeedback error={submitError}/>
        }

        <Link className="change-pass" to={'/change-password'}>
          <img src={LockIcon} className="icon icon-lock "/>
          Сменить пароль
        </Link>
        <div className="form__bsave">
          <Button mods={'button-primary--preloader'} disabled={pristine || loading} type={'submit'}>
            Сохранить {loading && <Preloader theme={PreloaderThemeEnum.light} style={{marginLeft: '8px'}}/>}
          </Button>
        </div>
      </form>)
    }}
  />
);

export default FormChangeSMTPSetting;
