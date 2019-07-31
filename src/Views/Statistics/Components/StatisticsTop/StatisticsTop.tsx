import * as React from 'react';
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import {SelectDefault} from "../../../../Components/Select/SelectDefault";
import SelectDataPicker from "../../../../Components/SelectDataPicker/SelectDataPicker";
import Button from '../../../../Components/Button/Button';
import {
  WithStatistic,
  IWithStatistic,
  StatisticAggregationEnum
} from '../../Enhancers/StatisticContext/StatisticContext';
import StatisticSelectTypeFilter from '../StatisticSelectTypeFilter/StatisticSelectTypeFilter';
import {OptionTime} from './OptionTime';
import StatisticExportXml from "../StatisticExportXML/StatisticExportXML";
import dateFormat from "dateformat";

interface IStatisticsTopProps extends IWithStatistic {
  [prop: string]: any
}


const SelectDefaultWithSelect = withSelect(SelectDefault)();


export const StatisticsTop: React.FC<IStatisticsTopProps> = ({
                                                               aggregation,
                                                               filter,
                                                               startDate,
                                                               stopDate,
                                                               onChangeAggregation,
                                                               onChangeStartDate,
                                                               onChangeStopDate,
                                                             }) => {

  const StartDate = startDate && new Date(startDate);
  const StopDate = stopDate && new Date(stopDate);

  return (
    <div className="statistics__top">
      <div className="statistics__start">
        <div className="statistics__title">Начало</div>
        <div className="form form--statistic">
          <div className="form__group">
            <SelectDataPicker
              label={'Дата'}
              maxDate={StopDate}
              onChange={(value: any) => {
                if (onChangeStartDate && value) {
                  onChangeStartDate(dateFormat(new Date(value), 'yyyy-mm-dd\'T\'HH:MM:ss'))
                }
              }}
            />
          </div>
          <SelectDefaultWithSelect
            labelKey={'label'}
            valueKey={'value'}
            className={'form__group form__group--select StartDate'}
            label={'Время'}
            selected={StartDate && StartDate.getHours()}
            placeholder={'Выберите время'}
            options={OptionTime}
            scrollbarsOptions={{
              autoHeightMin: 0,
              // autoHeightMax: 178,
            }}
            onChange={(option: ISelectOption) => {
              if (onChangeStartDate &&
                option &&
                StartDate) {
                onChangeStartDate(dateFormat(StartDate,'yyyy-mm-dd\'T\'HH:MM:ss'), option.value);
              }
            }}
          />
          <SelectDefaultWithSelect
            labelKey={'label'}
            valueKey={'value'}
            className={'form__group--wide Aggregation'}
            label={'Агрегировать'}
            selected={aggregation}
            scrollbarsOptions={{
              autoHeightMin: 0
            }}
            onChange={(option: ISelectOption) => {
              onChangeAggregation && onChangeAggregation(option.value);
            }}
            options={[
              {
                value: StatisticAggregationEnum.reception,
                label: 'По приемным',
              },
              {
                value: StatisticAggregationEnum.project,
                label: 'По проектам',
              },
            ]}
          />
        </div>
      </div>

      <div className="statistics__end">
        <div className="statistics__title">Конец</div>
        <form className="form form--statistic">
          <div className="form__group">
            <SelectDataPicker
              label={'Дата'}
              minDate={StartDate}
              onChange={(value: any) => {
                if (onChangeStopDate && value) {
                  onChangeStopDate(dateFormat(new Date(value), 'yyyy-mm-dd\'T\'HH:MM:ss'))
                }
              }}
            />
          </div>
          <SelectDefaultWithSelect
            labelKey={'label'}
            valueKey={'value'}
            className={'form__group form__group--select StopDate'}
            label={'Время'}
            selected={StopDate && StopDate.getHours()}
            placeholder={'Выберите время'}
            options={OptionTime}
            scrollbarsOptions={{
              autoHeightMin: 0
            }}
            onChange={(option: ISelectOption) => {
              if (onChangeStopDate &&
                option &&
                StopDate) {
                onChangeStopDate(dateFormat(StopDate,'yyyy-mm-dd\'T\'HH:MM:ss'), option.value);
              }
            }}
          />

          <StatisticSelectTypeFilter/>

        </form>
      </div>
      <div className="statistics__right">
        <StatisticExportXml/>
      </div>
    </div>
  );
}

export default WithStatistic(StatisticsTop);
