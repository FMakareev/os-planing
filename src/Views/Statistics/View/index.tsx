import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import StatisticsTop from '../Components/StatisticsTop/StatisticsTop';
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import StatisticContextProvider from "../Enhancers/StatisticContext/StatisticContext";
import StatisticNotificationsTop from '../Components/StatisticNotificationsTop/StatisticNotificationsTop';
import StatisticInfinityScroll from '../Enhancers/StatisticInfinityScroll/StatisticInfinityScroll';


export const Statistics = () => (
  <StatisticContextProvider>
    <div className="inner">
      <Breadcrumbs history={[
        {
          name: 'Календарь',
          to: '/'
        },
        {
          name: 'Статистика',
          to: '/statistics'
        },
      ]}/>

      <PageTitle>
        Статистика
      </PageTitle>


      <StatisticsTop/>

      <section className="notifications">
        <StatisticNotificationsTop/>

        <div className="notifications__content">
          <StatisticInfinityScroll/>
        </div>

      </section>


    </div>
  </StatisticContextProvider>);

export default Statistics;
