import * as React from 'react';
import {UserAvatar} from "../UserAvatar/UserAvatar";
import {ProfileDropdown} from "../ProfileDropdown/ProfileDropdown";
import {IPopupHoc} from "../PopupHOC/PopupHOC";
import PopupHoc from "../PopupHOC/PopupHOC";

interface IHeaderProfileProps extends IPopupHoc  {
  [prop: string]: any
}


export const HeaderProfile: React.FC<IHeaderProfileProps> = ({isOpen,onToggle})=>(
  <div className="header__profile profile-header">
    <UserAvatar onClick={onToggle}/>
    <ProfileDropdown isOpen={isOpen}/>
  </div>
);

export default PopupHoc(HeaderProfile)({excludeWrapper: 'header__profile', enableEventListener: true});