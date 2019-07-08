import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import {IUserState} from "../../Store/Reducers/User/reducers";
import CalendarIcon from '../SvgIcons/CalendarIcon';
import StatisticsIcon from "../SvgIcons/StatisticsIcon";
import SettingsIcon from '../SvgIcons/SettingsIcon';
import UsersIcon from '../SvgIcons/UsersIcon';
import ProjectsIcon from "../SvgIcons/ProjectsIcon";
import PasswordIcon from "../SvgIcons/PasswordIcon";
import LogoutIcon from "../SvgIcons/LogoutIcon";

interface IProfileDropdownProps extends IUserState {
  isOpen: boolean;

  [prop: string]: any;
}

export const ProfileDropdownAdmin: React.FC<IProfileDropdownProps> = ({isOpen, user}) => {
  return (
    <div className={classNames("profile-header__dropdown profile-dropdown", {
      'open': isOpen,
    })}>
      <div className="profile-dropdown__top">
        <div className="profile-dropdown__ava">
          {
            user && user.avatar &&
            <img src={user && user.avatar.url} alt="ava"/>
          }
        </div>
        <div className="profile-dropdown__mail">
          {user && user.email}
        </div>
      </div>
      <div className="profile-dropdown__content">
        <div className="profile-dropdown__group">
          <Link to={'/'} className="profile-dropdown__link">
            <CalendarIcon className="icon icon-calendar"/>
            Календарь
          </Link>
        </div>
        <div className="profile-dropdown__group">
          <Link className="profile-dropdown__link" to={'/statistics'}>
            <StatisticsIcon className="icon icon-statistics"/>
            Статистика
          </Link>
          <Link className="profile-dropdown__link" to={'/settings'}>
            <SettingsIcon className="icon icon-settings"/>
            Настройки
          </Link>
        </div>
        <div className="profile-dropdown__group">
          <Link className="profile-dropdown__link" to={'/users'}>
            <UsersIcon className="icon icon-users"/>
            Пользователи
          </Link>
          <Link className="profile-dropdown__link" to={'/projects'}>
            <ProjectsIcon className="icon icon-projects"/>
            Проекты
          </Link>
        </div>
      </div>
      <div className="profile-dropdown__bottom">
        <Link className="profile-dropdown__link" to={'/change-password'}>
          <PasswordIcon className="icon icon-password"/>
          Сменить пароль
        </Link>
        <Link className="profile-dropdown__link" to={'/logout'}>
          <LogoutIcon className="icon icon-logout"/>
          Выйти
        </Link>
      </div>
    </div>);
};


export default ProfileDropdownAdmin;
