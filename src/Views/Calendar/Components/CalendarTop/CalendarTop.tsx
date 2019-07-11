import * as React from 'react';
import {SelectDefault} from '../../../../Components/Select/SelectDefault';
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import {Button} from '../../../../Components/Button/Button';
import CalendarGetReceptionEnhancers from '../../Enhancers/CalendarGetReceptionEnhancers/CalendarGetReceptionEnhancers';
import CalendarGetProjectEnhancers from "../../Enhancers/CalendarGetProjectEnhancers/CalendarGetProjectEnhancers";


const SelectDefaultWithSelect = withSelect(SelectDefault)();

const SelectReceptionWithEnhancer = CalendarGetReceptionEnhancers(SelectDefaultWithSelect);
const SelectProjectWithEnhancer = CalendarGetProjectEnhancers(SelectDefaultWithSelect);


interface ICalendarTopProps {
  changeProject?(project: string): void;

  changeReception?(reception: string): void;

  [prop: string]: any;
}




export const CalendarTop: React.FC<ICalendarTopProps> = ({changeReception, changeProject,project,reception}) => (<div className="calendar__top">
  <div className="form form--selects">

    <SelectReceptionWithEnhancer
      label={'Приемная'}
      placeholder={'Выберите город'}
      selected={reception}
      onChange={({value}: ISelectOption) => {
        changeReception && changeReception(value);
      }}
    />

    <SelectProjectWithEnhancer
      label={'Проект'}
      placeholder={'Выберите категорию'}
      selected={project}
      onChange={({value}: ISelectOption) => {
        changeProject && changeProject(value);
      }}
    />

  </div>
  <div className="calendar__top-right">
    <Button>
      Экспорт в PDF
    </Button>
  </div>
</div>);

export default CalendarTop;
