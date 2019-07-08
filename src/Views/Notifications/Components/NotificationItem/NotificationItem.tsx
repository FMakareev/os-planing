import * as React from 'react';
import NotificationWrapper from "../../../../Components/NotificationWrapper/NotificationWrapper";
import classNames from 'classnames';
import {UserAvatar} from "../../../../Components/UserAvatar/UserAvatar";
import {Link} from 'react-router-dom';
import {INotification} from "../../../../Apollo/schema";


interface INotificationItemProps extends INotification {
	[prop: string]: any
}

export const NotificationItem: React.FC<INotificationItemProps> = ({fromUser, to, report, createAt, message, isRead}) => (
	<NotificationWrapper>
		<div
			className={classNames('notifications-item__new ',
			{
				"active": !isRead,
			})}/>

		<div className="notifications-item__top">
			<UserAvatar avatar={fromUser && fromUser.avatar} mods={'notifications-item__user-ava'}/>
			{
				fromUser &&
        <div className="notifications-item__info">
          <div className="notifications-item__name">
						{fromUser.fullName}
          </div>
          <div className="notifications-item__mail">
						{fromUser.email}
          </div>
        </div>
			}
			<div className="notifications-item__date">
				{createAt}
			</div>
		</div>
		
		<div className="notifications-item__text">
			{message}
		</div>

		{
			report && <Link to={`/report/${report.id}`} className="notifications-item__more">
        Перейти к отчету
      </Link>
		}

	</NotificationWrapper>
);

export default NotificationItem;
