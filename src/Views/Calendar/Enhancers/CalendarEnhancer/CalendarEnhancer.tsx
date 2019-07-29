import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {joinQueryString} from '../../../../Helpers/joinQueryString';

const queryString = require('query-string');


interface ICalendarEnhancerState {
  month: number;
  year: number;
  day?: number;
  currentDay: string;
  weeks?: string[];
  reception?: string;
  project?: string;
}

interface ICalendarEnhancerProps {
  [prop: string]: any
}


export interface ICalendarDate extends ICalendarEnhancerState {
  changeDate({year, month}: any): void;
  changeProject?(project: string): void;
  changeReception?(reception: string): void;
  [prop: string]: any
}

const CalendarEnhancer = (WrapperComponent: React.ElementType) => {
  return withRouter(class extends React.Component<RouteComponentProps<ICalendarEnhancerProps>, ICalendarEnhancerState> {


    constructor(props: RouteComponentProps<ICalendarEnhancerProps>) {
      super(props);
      this.state = this.initialState;
    }

    get initialState() {
      const {month, year, reception, project} = this.getQueryParamInUrl();
      const date = new Date();
      if (year) {
        date.setFullYear(year);
      }
      if (month >= 0) {
        date.setMonth(month);
      }

      return {
        ...this.getCurrentMonth(date),
        reception,
        project,
      };
    }

    /**
     * @desc записывает в параметры адресной строки выбранный год и месяц
     * */
    saveDateInUrl = ({year, month}: any) => {
      const {history, location} = this.props;
      history.push(`${location.pathname}?${joinQueryString(location.search, {year, month})}`);
    };

    /**
     * @desc записывает в параметры адресной строки выбранный год и месяц
     * */
    changeProject = (project: any) => {
      const {history, location} = this.props;
      history.push(`${location.pathname}?${joinQueryString(location.search, {project})}`);
      this.setState({project});
    };

    /**
     * @desc записывает в параметры адресной строки выбранный год и месяц
     * */
    changeReception = (reception: any) => {
      const {history, location} = this.props;
      history.push(`${location.pathname}?${joinQueryString(location.search, {reception})}`);
      this.setState({reception});
    };


    /**
     * @desc получить парамерты адресной строки: year, month, reception, project
     * */
    getQueryParamInUrl = () => {
      const {location} = this.props;
      return queryString.parse(location.search);
    };

    /**
     * @desc
     * */
    changeDate = ({year, month}: any) => {
      let date = new Date();

      if (year) {
        date.setFullYear(year);
      } else if (month >= 0) {
        date.setMonth(month);
      }
      this.setState(this.getCurrentMonth(date))
    };

    /**
     * @desc
     * */
    getCurrentMonth = (date: Date) => {

      const month: number = date.getMonth();
      const year: number = date.getFullYear();
      let weeks: any[] = [];

      const day: number = date.getDate();
      const msInPerDay: number = 86400000;

      let now = Date.parse(date.toISOString());
      weeks.push(now - (day - 1) * msInPerDay);
      for (let i = 1; i < 5; i += 1) {
        weeks.push(weeks[i - 1] + 7 * msInPerDay);
      }

      weeks = weeks.map((item: number): any => new Date(item).toISOString());
      this.saveDateInUrl({
        month,
        year
      });
      return {
        month,
        year,
        day,
        weeks,
        currentDay: new Date().toISOString()
      }

    };

    render() {
      return (<WrapperComponent
        changeDate={this.changeDate}
        changeProject={this.changeProject}
        changeReception={this.changeReception}
        {...this.state}
        {...this.props}
      />);
    }
  })
};

export default CalendarEnhancer;