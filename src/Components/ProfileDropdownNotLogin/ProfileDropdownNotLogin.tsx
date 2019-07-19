import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import LogoutIcon from '../SvgIcons/LogoutIcon';

interface IProfileDropdownProps {
  isOpen: boolean;

  [prop: string]: any;
}

export const ProfileDropdownNotLogin: React.FC<IProfileDropdownProps> = ({isOpen}) => (
  <div className={classNames("profile-header__dropdown profile-dropdown", {
    'open': isOpen,
  })}>
    <div className="profile-dropdown__bottom">
      <Link className="profile-dropdown__link" to={'/logout'}>
        <LogoutIcon className="icon icon-logout"/>
        Войти
      </Link>
    </div>
  </div>);


export default ProfileDropdownNotLogin;
