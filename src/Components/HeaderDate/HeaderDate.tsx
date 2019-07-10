import * as React from 'react';

import {SelectDate} from '../Select/SelectDate';
import withSelect, {ISelectOption} from "../Select/withSelect";
import {MonthOptions} from "./MonthOptions";
import {Range} from '../../Helpers/Range';
import {ICalendarDate} from "../../Views/Calendar/Enhancers/CalendarEnhancer/CalendarEnhancer";

const YearOptions = () => {
  let start = 2019;
  return Range(20).map((_, idx: number) => ({
    label: start + idx,
    value: start + idx,
  }))
};


const SelectDateWith = withSelect(SelectDate)();


interface IHeaderDateProps extends ICalendarDate {

}

export const HeaderDate: React.FC<IHeaderDateProps> = ({month, year, changeDate, labelKey,
                                                         valueKey}) => {
  return (<div className="header__date">
    <div className="header__month">
      <SelectDateWith
        labelKey={'label'}
        valueKey={'value'}
        options={MonthOptions}
        selected={month}
        onChange={(value: ISelectOption)=>{
          changeDate({
            month: value[valueKey],
          })
        }}
      />
    </div>

    <div className="header__year">
      <SelectDateWith
        labelKey={'label'}
        valueKey={'value'}
        options={YearOptions()}
        selected={year}
        onChange={(value: ISelectOption)=>{
          changeDate({
            year: value[valueKey],
          })
        }}
      />
    </div>
  </div>);
}

export default HeaderDate;
