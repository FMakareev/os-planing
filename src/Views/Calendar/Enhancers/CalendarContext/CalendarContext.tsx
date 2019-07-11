import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {joinQueryString} from "../../../../Helpers/joinQueryString";

const queryString = require('query-string');


interface IState {
  month: number;
  year: number;
  day?: number;
  currentDay?: string;
  weeks?: string[];
  reception?: string;
  project?: string;
}

interface IProps {
  [prop: string]: any
}

interface ICalendarQueryStringParams {
  month?: number;
  year?: number;
  reception?: string;
  project?: string;
}

export interface ICalendarContext extends IState {
  changeDate?({year, month}: any): void;

  changeProject?(project: string): void;

  changeReception?(reception: string): void;

  [prop: string]: any;
}


const CalendarContext = React.createContext<ICalendarContext>({
  month: -1,
  year: -1,
  day: -1,
  currentDay: undefined,
  weeks: [],
  reception: undefined,
  project: undefined
});

export const WithCalendar = (WrapperComponent: React.ElementType) => (props: any) => (
  <CalendarContext.Consumer>
    {
      (propsContext: ICalendarContext) => (
        <WrapperComponent
          {...props}
          {...propsContext}
        />
      )
    }
  </CalendarContext.Consumer>
);


export class CalendarContextProvider extends React.Component<RouteComponentProps<IProps>, IState> {

  constructor(props: RouteComponentProps<IProps>) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    const {month, year, reception, project} = this.getQueryParamInUrl();
    const date = new Date();
    if (year) {
      date.setFullYear(year);
    }
    if (month && month >= 0) {
      date.setMonth(month);
    }

    return {
      ...this.getCurrentMonth(date),
      reception: reception || '',
      project: project || '',
    };
  }

  /**
   * @desc записывает в параметры адресной строки выбранный год и месяц
   * */
  saveDateInUrl = ({year, month}: ICalendarQueryStringParams): void => {
    const {history, location} = this.props;
    history.push(`${location.pathname}?${joinQueryString(location.search, {year, month})}`);
  };

  /**
   * @desc записывает в параметры адресной строки выбранный год и месяц
   * */
  changeProject = (project: any): void => {
    const {history, location} = this.props;
    history.push(`${location.pathname}?${joinQueryString(location.search, {project})}`);
    this.setState({project: project || ''});
  };

  /**
   * @desc записывает в параметры адресной строки выбранный год и месяц
   * */
  changeReception = (reception: any): void => {
    const {history, location} = this.props;
    history.push(`${location.pathname}?${joinQueryString(location.search, {reception})}`);
    this.setState({reception: reception || ''});
  };


  /**
   * @desc получить парамерты адресной строки: year, month, reception, project
   * */
  getQueryParamInUrl = (): ICalendarQueryStringParams => {
    const {location} = this.props;
    return queryString.parse(location.search);
  };

  /**
   * @desc
   * */
  changeDate = ({year, month}: any): void => {
    let date = new Date();
    if (year) {
      date.setFullYear(year);
    } else {
      date.setFullYear(this.state.year);
    }
    if (month >= 0) {
      date.setMonth(month);
    }else {
      date.setMonth(this.state.month);
    }
    this.setState((state) => ({
      ...state,
      ...this.getCurrentMonth(date),
    }))
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
    return (<CalendarContext.Provider
      value={{
        ...this.state,
        changeDate: this.changeDate,
        changeProject: this.changeProject,
        changeReception: this.changeReception,
      }}
    >
      {this.props.children}
    </CalendarContext.Provider>);
  }
}


export default withRouter(CalendarContextProvider);