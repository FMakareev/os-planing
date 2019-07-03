import * as React from 'react';
import {Button} from "../Button/Button";

interface INotificationFooterProps {
	[prop: string]: any
}

export const NotificationFooter: React.FC<INotificationFooterProps> = () => (
	<div className="buttons-block">
		<Button>
			Добавить
		</Button>
	</div>
);

export default NotificationFooter;
