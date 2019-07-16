import * as React from 'react';
import {
  EnumNotificationWrapperMods,
  NotificationWrapper
} from "../../../../Components/NotificationWrapper/NotificationWrapper";
import {IStatisticProject, IStatisticReception} from "../../../../Apollo/Types/Statistics";

interface IStatisticRowProps extends IStatisticProject, IStatisticReception {
  [prop: string]: any
}

export const StatisticRow: React.FC<IStatisticRowProps> = ({
                                                             project,
                                                             reception,
                                                             expectedValue,
                                                             dispersion,
                                                             sum
                                                           }) => (
  <NotificationWrapper mods={EnumNotificationWrapperMods.statics}>
    <div className="notifications-item__name">
      {project && project.name}
      {reception && reception.city}
    </div>
    <div className="notifications-item__field">
      <div className="field">
        {expectedValue}
      </div>
    </div>
    <div className="notifications-item__field">
      <div className="field">
        {dispersion}
      </div>
    </div>
    <div className="notifications-item__field">
      <div className="field">
        {sum}
      </div>
    </div>
  </NotificationWrapper>
);

export default StatisticRow;
