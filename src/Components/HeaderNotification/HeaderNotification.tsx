import * as React from 'react';
import notification from "../../Assets/img/spritesvg/notification.svg";


interface IHeaderNotificationProps {
	count?: number
}

export const HeaderNotification: React.FC<IHeaderNotificationProps> = ({count}) => (<a
	className="header__notification"
	href="javascript:void(0);"
>
	<img src={notification} className="icon icon-notification "/>
	{
		count && <span>
				{count}
			</span>
	}

</a>);

export default HeaderNotification;
