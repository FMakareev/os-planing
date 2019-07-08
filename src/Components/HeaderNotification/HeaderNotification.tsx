import * as React from 'react';
import notification from "../../Assets/img/spritesvg/notification.svg";
import {Link} from "react-router-dom";


interface IHeaderNotificationProps {
  count?: number
}

export const HeaderNotification: React.FC<IHeaderNotificationProps> = ({count}) => {
  return (<Link
    className="header__notification"
    to={'/notifications'}
  >
    <img src={notification} className="icon icon-notification "/>
    {
      count  && <span>
				{count}
			</span>
    }
  </Link>);
};

export default HeaderNotification;
