import * as React from 'react';
import {EnumNotificationsTopMods, NotificationsTop} from "../../../../Components/NotificationsTop/NotificationsTop";
import {StatisticAggregationEnum, WithStatistic} from "../../Enhancers/StatisticContext/StatisticContext";

interface IStatisticNotificationsTopProps {
  aggregation?: StatisticAggregationEnum;

  [prop: string]: any
}

const StatisticNotificationsTop: React.FC<IStatisticNotificationsTopProps> = ({aggregation}) => {
  return (
    <NotificationsTop mods={EnumNotificationsTopMods.statics}>
      <div className="notifications__item">

        {
          aggregation === StatisticAggregationEnum.project ?  (<span>Проектам</span>):(<span>Приемная</span>)
        }
      </div>
      <div className="notifications__item">Мат. ожидание</div>
      <div className="notifications__item">Дисперсия</div>
      <div className="notifications__item">Количество</div>
    </NotificationsTop>
  );
};

export default WithStatistic(StatisticNotificationsTop);

