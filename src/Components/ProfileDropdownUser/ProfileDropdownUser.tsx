import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import {IUserState} from "../../Store/Reducers/User/reducers";
import CalendarIcon from '../SvgIcons/CalendarIcon';
import LogoutIcon from '../SvgIcons/LogoutIcon';

interface IProfileDropdownProps extends IUserState {
  isOpen: boolean;

  [prop: string]: any;
}

export const ProfileDropdownUser: React.FC<IProfileDropdownProps> = ({isOpen, user}) => (
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
    </div>
    <div className="profile-dropdown__bottom">
      <Link className="profile-dropdown__link" to={'/logout'}>
        <LogoutIcon className="icon icon-logout"/>
        Выйти
      </Link>
    </div>
  </div>);


export default ProfileDropdownUser;
