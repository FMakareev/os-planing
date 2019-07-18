import * as React from 'react';
import {SelectDefault} from '../../../../Components/Select/SelectDefault';
import withSelect, {ISelectOption} from "../../../../Components/Select/withSelect";
import CalendarGetReceptionEnhancers from '../../Enhancers/CalendarGetReceptionEnhancers/CalendarGetReceptionEnhancers';
import CalendarGetProjectEnhancers from "../../Enhancers/CalendarGetProjectEnhancers/CalendarGetProjectEnhancers";
import CalendarCreateEvent from '../CalendarCreateEvent/CalendarCreateEvent';
import {UserRoleEnum} from "../../../../Apollo/schema";
import CheckAccess, {ICheckAccessApi} from "../../../../Enhancers/CheckAccess/CheckAccess";
import {joinQueryString} from "../../../../Helpers/joinQueryString";


const SelectDefaultWithSelect = withSelect(SelectDefault)();

const SelectReceptionWithEnhancer = CalendarGetReceptionEnhancers(SelectDefaultWithSelect);
const SelectProjectWithEnhancer = CalendarGetProjectEnhancers(SelectDefaultWithSelect);


interface ICalendarTopProps {
  changeProject?(project: string): void;

  changeReception?(reception: string): void;

  [prop: string]: any;
}


export const CalendarTop: React.FC<ICalendarTopProps> = ({changeReception, changeProject, project, reception, weeks, ...rest}) => {
  return (
    <div className="calendar__top">
      <div className="form form--selects">

        <SelectReceptionWithEnhancer
          label={'Приемная'}
          placeholder={'Выберите город'}
          selected={reception}
          className={'SelectReceptionWithEnhancer'}
          onChange={({value}: ISelectOption) => {
            changeReception && changeReception(value);
          }}
        />

        <SelectProjectWithEnhancer
          label={'Проект'}
          placeholder={'Выберите категорию'}
          selected={project}
          className={'SelectProjectWithEnhancer'}
          onChange={({value}: ISelectOption) => {
            changeProject && changeProject(value);
          }}
        />

      </div>
      <div className="calendar__top-right">
        <CheckAccess
          accessRights={UserRoleEnum.user}
          render={({access}: ICheckAccessApi) => {
            if (!access) return null;
            return (
              <div style={{
                marginRight: '16px',
                display: 'inline-block',
              }}>
                <CalendarCreateEvent/>
              </div>
            )
          }}/>

        <a className={'button-primary'} download
           href={`/pdf_calendar?${joinQueryString('', {
             ...(project ? {project} : {}),
             ...(reception ? {reception} : {}),
             ...(Array.isArray(weeks) ? {date: weeks[0].replace('Z', '')} : {}),
           })}`}>
          Экспорт в PDF
        </a>
      </div>
    </div>);
};

export default CalendarTop;
