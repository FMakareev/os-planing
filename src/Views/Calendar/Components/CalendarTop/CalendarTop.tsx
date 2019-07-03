import * as React from 'react';
import {SelectDefault} from '../../../../Components/Select/SelectDefault';
import withSelect from "../../../../Components/Select/withSelect";
import {Button} from '../../../../Components/Button/Button';
import {CreateCityOptions, CreateProjectOptions} from '../../View/mock';

const SelectDefaultWithSelect = withSelect(SelectDefault)();

const LobbyOptions = CreateCityOptions();
const ProjectOptions = CreateProjectOptions();

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
            options={ProjectOptions}
        />

    </div>
    <div className="calendar__top-right">
        <Button>
            Экспорт в PDF
        </Button>
    </div>
</div>);

export default CalendarTop;
