import * as React from 'react';

import {SelectDate} from '../Select/SelectDate';
import withSelect from "../Select/withSelect";
import {MonthOptions} from "./MonthOptions";
import {Range} from '../../Helpers/Range';

const YearOptions = () => {
  let start = 2019;
  return Range(20).map((_, idx: number) => ({
    label: start + idx,
    value: start + idx,
  }))
};


const SelectDateWith = withSelect(SelectDate)();


interface IHeaderDateProps {
  month?: number;
  year?: number;
}

export const HeaderDate: React.FC<IHeaderDateProps> = ({month, year}) => (<div className="header__date">
  <div className="header__month">
    <SelectDateWith
      options={MonthOptions}
      selected={month}
    />
  </div>

  <div className="header__year">
    <SelectDateWith
      options={YearOptions()}
      selected={year}
    />
  </div>
</div>);

export default HeaderDate;
