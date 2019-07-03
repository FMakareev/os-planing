import * as React from 'react';
import {
	EnumNotificationWrapperMods,
	NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";

interface IStatisticRowProps {
	[prop: string]: any
}

export const StatisticRow: React.FC<IStatisticRowProps> = () => (
	<NotificationWrapper mods={EnumNotificationWrapperMods.statics}>
		<div className="notifications-item__name">Краснокаменск</div>
		<div className="notifications-item__field">
			<div className="field">М=50,42<span>D=15,64</span></div>
		</div>
		<div className="notifications-item__field">
			<div className="field">М=64,1<span>D=17,98</span></div>
		</div>
		<div className="notifications-item__field">
			<div className="field">М=13,12<span>D=1,98</span></div>
		</div>
		<div className="notifications-item__field">
			<div className="field">М=14,88<span>D=2,64</span></div>
		</div>
		<div className="notifications-item__field">
			<div className="field">М=32,62<span>D=8,54</span></div>
		</div>
	</NotificationWrapper>
);

export default StatisticRow;
