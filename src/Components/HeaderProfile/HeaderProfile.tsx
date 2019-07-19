import * as React from 'react';
import {UserAvatar} from "../UserAvatar/UserAvatar";
import {ProfileDropdownAdmin} from "../ProfileDropdownAdmin/ProfileDropdownAdmin";
import {IPopupHoc} from "../../Enhancers/PopupHOC/PopupHOC";
import PopupHoc from "../../Enhancers/PopupHOC/PopupHOC";
import ProfileDropdownUser from "../ProfileDropdownUser/ProfileDropdownUser";
import {IStoreState} from "../../Store/Store";
import {connect} from "react-redux";
import {IUserState} from "../../Store/Reducers/User/reducers";
import {UserRoleEnum} from '../../Apollo/schema';
import ProfileDropdownNotLogin from "../ProfileDropdownNotLogin/ProfileDropdownNotLogin";
import GetNotReadCountNotification
  from "../../Views/Notifications/Enhancers/GetNotReadCountNotification/GetNotReadCountNotification";
import HeaderNotification from "../HeaderNotification/HeaderNotification";

interface IHeaderProfileProps extends IPopupHoc {
  user: IUserState;

  [prop: string]: any
}


const HeaderNotificationWithQuery = GetNotReadCountNotification(HeaderNotification)();
export const HeaderProfile: React.FC<IHeaderProfileProps> = ({isOpen, user, onToggle}) => {
  return (
    <React.Fragment>

        <div className="header__right">
          {

            user.user &&
            <HeaderNotificationWithQuery/>
          }
        </div>
      <div className="header__profile profile-header">
        <UserAvatar
          avatar={user.user &&
          user.user.avatar &&
          user.user.avatar.url}
          onClick={onToggle}
        />
        {
          user.user && user.user.role === UserRoleEnum.admin &&
          <ProfileDropdownAdmin {...user} isOpen={isOpen}/>
        }
        {
          user.user && user.user.role !== UserRoleEnum.admin &&
          <ProfileDropdownUser {...user} isOpen={isOpen}/>
        }
        {
          !user.user &&
          <ProfileDropdownNotLogin isOpen={isOpen}/>
        }
      </div>
    </React.Fragment>
  );
}


const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
});

export default PopupHoc(connect(mapStateToProps)(HeaderProfile))({
  excludeWrapper: 'header__profile',
  enableEventListener: true
});