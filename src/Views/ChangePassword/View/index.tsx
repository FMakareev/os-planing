import * as React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import {FormChangePassword} from '../Components/FormChangePassword/FormChangePassword';
import ChangeUserPasswordHoc from "../Enhancers/ChangeUserPasswordHOC/ChangeUserPasswordHOC";

//ChangeUserPasswordHoc

const FormChangePasswordWithQuery = ChangeUserPasswordHoc(FormChangePassword);

export const ChangePassword = () => (<div className="inner inner--password">
  <Breadcrumbs
    history={[
      {
        name: 'Настройки',
        to: '/settings'
      },
      {
        name: 'Сменить пароль',
        to: '/change-password'
      },
    ]}
  />
  <PageTitle>
    Изменить свой пароль
  </PageTitle>

  <div className="inner__content">
    <FormChangePasswordWithQuery/>
  </div>
</div>);

export default ChangePassword;
