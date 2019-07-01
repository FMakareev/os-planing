import * as React from 'react';
import {SelectDefault} from '../Select/SelectDefault';
import withSelect from "../Select/withSelect";
import {MonthOptions} from "../HeaderDate/MonthOptions";
import {Button} from '../Button/Button';

const SelectDefaultWithSelect = withSelect(SelectDefault)();

const LobbyOptions = [
	{
		name: 'Проект №1',
		value: 'Проект №1',
	},
	{
		name: 'Проект №3',
		value: 'Проект №3',
	},
	{
		name: 'Проект №2',
		value: 'Проект №2',
	},
	{
		name: 'Проект №0',
		value: 'Проект №0',
	},
];

export const CalendarTop = () => (<div className="calendar__top">
	<div className="form form--selects">

		<SelectDefaultWithSelect
			label={'Приемная'}
			placeholder={'Выберите город'}
			options={LobbyOptions}
		/>

		<SelectDefaultWithSelect
			label={'Проект'}
			placeholder={'Выберите категорию'}
			options={MonthOptions}
		/>

	</div>
	<div className="calendar__top-right">
		<Button>
			Экспорт в PDF
		</Button>
	</div>
</div>);

export default CalendarTop;
