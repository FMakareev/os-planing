import * as React from 'react';
import {PageTitle} from "../../../Components/PageTitle/PageTitle";
import {EnumNotificationsTopMods, NotificationsTop} from "../../../Components/NotificationsTop/NotificationsTop";
import {StatisticsTop} from '../Components/StatisticsTop/StatisticsTop';
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import {StatisticRow} from '../Components/StatisticRow/StatisticRow';


export const Statistics = () => (<div className="inner">
	<Breadcrumbs history={[
		{
			name: 'Календарь',
			to:'/'
		},
		{
			name: 'Статистика',
			to:'/statistics'
		},
	]}/>

	<PageTitle>
		Статистика
	</PageTitle>

	<StatisticsTop/>

	<section className="notifications">
		<NotificationsTop mods={EnumNotificationsTopMods.statics}>
			<div className="notifications__item">Приемная</div>
			<div className="notifications__item">Поле 1</div>
			<div className="notifications__item">Поле 2</div>
			<div className="notifications__item">Поле 3</div>
			<div className="notifications__item">Поле 4</div>
			<div className="notifications__item">Поле 5</div>
		</NotificationsTop>

		<div className="notifications__content">
			<StatisticRow/>
			<StatisticRow/>
			<StatisticRow/>
		</div>

	</section>




</div>);

export default Statistics;
