import * as React from 'react';
import dateFormat from 'dateformat';


export enum StatisticAggregationEnum {
  reception = 'reception',
  project = 'project',
}


export interface IStatisticContext extends IState {
  onChangeAggregation?(aggregation: StatisticAggregationEnum): void;

  onChangeFilter?(filter: string): void;

  onChangeStartDate?(startDate: string, startTime?: number): void;

  onChangeStopDate?(stopDate: string, stopTime?: number): void;
}


interface IState {
  startDate?: string;
  stopDate?: string;
  aggregation?: StatisticAggregationEnum;
  filter?: string;
}

export interface IWithStatistic extends IStatisticContext {

}


export const StatisticContext = React.createContext<IStatisticContext>({});


export const WithStatistic = <TProps extends any>(WrapperComponent: React.ElementType) =>
  (props: TProps) => (
    <StatisticContext.Consumer>
      {
        (propsContext: IStatisticContext) => (<WrapperComponent
          {...propsContext}
          {...props}
        />)
      }
    </StatisticContext.Consumer>
  );


// 1.  Агрегирую по *проектам*, в фильтр вывожу *приемные* и запрашиваю getProjectStatistic
// 2.  Агрегирую по *приемным*, в фильтр вывожу *проекты* и запрашиваю getReceptionStatistic

export class StatisticContextProvider extends React.Component<any, IState> {


  constructor(props: any) {
    super(props);

    this.state = this.initialState;
  }

  get initialState() {
    return {
      startDate: dateFormat(new Date(),'yyyy-mm-dd\'T\'HH:MM:ss'),
      stopDate:  dateFormat(new Date(),'yyyy-mm-dd\'T\'HH:MM:ss'),
      aggregation: StatisticAggregationEnum.project,
      filter: undefined,
    }
  }

  /** @desc */
  onChangeAggregation = (aggregation: StatisticAggregationEnum): void => {
    this.setState({
      aggregation,
      filter: undefined,
    })
  };

  /** @desc */
  onChangeFilter = (filter: string): void => {
    this.setState({
      filter,
    })
  };

  /** @desc */
  onChangeStartDate = (startDate: string, startTime?: number): void => {
    if (typeof startTime === 'number' && startTime >= 0) {
      this.setState({
        startDate: dateFormat(new Date(new Date(startDate).setHours(startTime)),'yyyy-mm-dd\'T\'HH:MM:ss'),
      })
    } else {
      this.setState({
        startDate,
      })
    }
  };

  /** @desc */
  onChangeStopDate = (stopDate: string, stopTime?: number): void => {
    if (typeof stopTime === 'number' && stopTime >= 0) {
      this.setState({
        stopDate: dateFormat(new Date(new Date(stopDate).setHours(stopTime)),'yyyy-mm-dd\'T\'HH:MM:ss'),
      })
    } else {
      this.setState({
        stopDate,
      })
    }
  };


  render() {
    const {children} = this.props;
    return (<StatisticContext.Provider
      value={{
        ...this.state,
        onChangeAggregation: this.onChangeAggregation,
        onChangeFilter: this.onChangeFilter,
        onChangeStartDate: this.onChangeStartDate,
        onChangeStopDate: this.onChangeStopDate,
      }}
    >
      {children}
    </StatisticContext.Provider>)
  }
}


export default StatisticContextProvider;