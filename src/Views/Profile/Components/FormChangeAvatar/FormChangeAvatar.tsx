import * as React from 'react';

import {Button, ButtonStyleEnum} from '../../../../Components/Button/Button';
import {Field, FieldProps, Form, FormRenderProps} from "react-final-form";
import {ReactNode} from "react";
import {InvalidFeedback} from "../../../../Components/InvalidFeedback/InvalidFeedback";
import AvatarFields from "../../../../Components/AvatarFields/AvatarFields";
import Preloader, {PreloaderThemeEnum} from "../../../../Components/Preloader/Preloader";

interface IFormChangeAvatarProps {
  [prop: string]: any
}

interface IFormChangeAvatarValues {
  avatar?: {
    file?: any,
    preview?: string
    url?: string
    id?: string
  }
}


export const FormChangeAvatar: React.FC<IFormChangeAvatarProps> = ({onSubmit, initialValues, loading}) => {

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({
                 submitError,
                 handleSubmit,
                 form,
                 submitting,
                 pristine,
               }: FormRenderProps<IFormChangeAvatarValues>): ReactNode => {

        return (<form onSubmit={handleSubmit}>
          <div className="inner-info">
            <Field
              name="avatar"
              type="file"
              label={'Сменить фото'}
              disabled={loading}
            >
              {
                (props: FieldProps<any, any>) => (<AvatarFields {...props}/>)
              }
            </Field>
            {submitError && <InvalidFeedback error={submitError}/>}

            <div className="b-center">
              <Button
                hidden={false}
                style={ButtonStyleEnum.border}
                mods={'button-primary--preloader'}
                disabled={pristine || loading}
                type={'submit'}
              >
                Загрузить {
                loading &&
                <Preloader
                    theme={PreloaderThemeEnum.light}
                    style={{marginLeft: '8px'}}
                />
              }
              </Button>
            </div>
          </div>
        </form>)
      }}
    />
  )
}


export default FormChangeAvatar;
