import * as React from 'react';

import {SelectDate} from '../Select/SelectDate';
import withSelect from "../Select/withSelect";
import {MonthOptions} from "./MonthOptions";
import {YearOptions} from "./YearOptions";



const SelectDateWith = withSelect(SelectDate)();

export const HeaderDate = () => (<div className="header__date">

	<div className="header__month">
		<SelectDateWith
			options={MonthOptions}
			selected={'Май'}
		/>
	</div>

	<div className="header__year">
		<SelectDateWith
			options={YearOptions}
			selected={'2003'}
		/>
	</div>

</div>);

export default HeaderDate;
