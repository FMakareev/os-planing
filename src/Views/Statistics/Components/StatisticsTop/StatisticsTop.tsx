import * as React from 'react';
import withSelect from "../../../../Components/Select/withSelect";
import {SelectDefault} from "../../../../Components/Select/SelectDefault";
import SelectDataPicker from "../../../../Components/SelectDataPicker/SelectDataPicker";
import Button from '../../../../Components/Button/Button';

interface IStatisticsTopProps {
    [prop: string]: any
}


const SelectDefaultWithSelect = withSelect(SelectDefault)();


export const StatisticsTop: React.FC<IStatisticsTopProps> = () => (
    <div className="statistics__top">
        <div className="statistics__start">
            <div className="statistics__title">Начало</div>
            <div className="form form--statistic">
                <div className="form__group">
                    <SelectDataPicker
                        label={'Дата'}
                    />
                </div>
                <SelectDefaultWithSelect
                    className={'form__group form__group--select'}
                    label={'Время'}
                    selected={'Выберите время'}
                    options={[
                        {
                            value: 'Выберите время',
                            label: 'Выберите время',
                        },
                        {
                            value: '00:00',
                            label: '00:00',
                        },
                        {
                            value: '01:00',
                            label: '01:00',
                        },
                    ]}
                />
                <SelectDefaultWithSelect
                    className={'form__group--wide'}
                    label={'Агрегировать'}
                    selected={'По приемным'}
                    options={[
                        {
                            value: 'По приемным',
                            label: 'По приемным',
                        },
                        {
                            value: 'По проектам',
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
                    />
                </div>
                <SelectDefaultWithSelect
                    className={'form__group form__group--select'}
                    label={'Время'}
                    selected={'Выберите время'}
                    options={[
                        {
                            value: 'Выберите время',
                            label: 'Выберите время',
                        },
                        {
                            value: '00:00',
                            label: '00:00',
                        },
                        {
                            value: '01:00',
                            label: '01:00',
                        },
                    ]}
                />
                <SelectDefaultWithSelect
                    className={'form__group--wide'}
                    label={'Фильтр'}
                    selected={'Все проекты'}
                    options={[
                        {
                            value: 'Все проекты',
                            label: 'Все проекты',
                        },
                        {
                            value: 'Проект №1',
                            label: 'Проект №1',
                        },
                        {
                            value: 'Проект №2',
                            label: 'Проект №2',
                        },
                    ]}
                />

            </form>
        </div>
        <div className="statistics__right">
          <Button>
            Экспорт в Excel
          </Button>
        </div>
    </div>
);

export default StatisticsTop;
