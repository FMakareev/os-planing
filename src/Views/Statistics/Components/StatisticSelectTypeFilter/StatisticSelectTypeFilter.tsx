import * as React from 'react';
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import {SelectDefault} from "../../../../Components/Select/SelectDefault";
import {WithStatistic, IWithStatistic} from "../../Enhancers/StatisticContext/StatisticContext";
import GetStatisticFilterData from "../../Enhancers/GetStatisticFilterData/GetStatisticFilterData";

interface IStatisticSelectTypeFilterProps extends IWithStatistic {
  [prop: string]: any
}


const SelectDefaultWithSelect = withSelect(SelectDefault)();

const StatisticSelectTypeFilter: React.FC<IStatisticSelectTypeFilterProps> = ({filter, loading, items, onChangeFilter}) => {

  if (loading) {
    return <div>Загрузка</div>
  }
  return (
    <SelectDefaultWithSelect
      labelKey={'label'}
      valueKey={'value'}
      className={'form__group--wide StatisticSelectTypeFilter'}
      label={'Фильтр'}
      selected={filter}
      disabled={loading}
      onChange={(option: ISelectOption) => {
        onChangeFilter && onChangeFilter(option.value);
      }}
      options={items}
    />
  );
};

export default WithStatistic(GetStatisticFilterData(StatisticSelectTypeFilter));