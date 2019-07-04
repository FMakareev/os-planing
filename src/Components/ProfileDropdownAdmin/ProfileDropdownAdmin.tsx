import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import CalendarIcon from '../../Assets/img/spritesvg/calendar.svg'
import StatisticsIcon from '../../Assets/img/spritesvg/statistics.svg'
import SettingsIcon from '../../Assets/img/spritesvg/settings.svg'
import UsersIcon from '../../Assets/img/spritesvg/users.svg'
import ProjectsIcon from '../../Assets/img/spritesvg/projects.svg'
import PasswordIcon from '../../Assets/img/spritesvg/password.svg'
import LogoutIcon from '../../Assets/img/spritesvg/logout.svg'
import {IUserState} from "../../Store/Reducers/User/reducers";

interface IProfileDropdownProps extends IUserState {
  isOpen: boolean;

  [prop: string]: any;
}

export const ProfileDropdownAdmin: React.FC<IProfileDropdownProps> = ({isOpen, user}) => (
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
          <img src={CalendarIcon} className="icon icon-calendar"/>
          Календарь
        </Link>
      </div>
      <div className="profile-dropdown__group">
        <Link className="profile-dropdown__link" to={'/statistics'}>
          <img src={StatisticsIcon} className="icon icon-statistics"/>
          Статистика
        </Link>
        <Link className="profile-dropdown__link" to={'/settings'}>
          <img src={SettingsIcon} className="icon icon-settings"/>
          Настройки
        </Link>
      </div>
      <div className="profile-dropdown__group">
        <Link className="profile-dropdown__link" to={'/users'}>
          <img src={UsersIcon} className="icon icon-users"/>
          Пользователи
        </Link>
        <Link className="profile-dropdown__link" to={'/projects'}>
          <img src={ProjectsIcon} className="icon icon-projects"/>
          Проекты
        </Link>
      </div>
    </div>
    <div className="profile-dropdown__bottom">
      <Link className="profile-dropdown__link" to={'/change-password'}>
        <img src={PasswordIcon} className="icon icon-password"/>
        Сменить пароль
      </Link>
      <Link className="profile-dropdown__link" to={'/logout'}>
        <img src={LogoutIcon} className="icon icon-logout"/>
        Выйти
      </Link>
    </div>
  </div>);


export default ProfileDropdownAdmin;
