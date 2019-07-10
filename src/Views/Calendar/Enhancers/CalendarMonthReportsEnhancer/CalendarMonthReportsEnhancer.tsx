import * as React from 'react';


export enum DayCardModeEnum {
  monthReport = 'monthReport',
  eventReport = 'eventReport',
}

interface ICalendarMonthReportsEnhancerProps {
  [prop: string]: any
}

interface ICalendarMonthReportsEnhancerState {
  currentCardMode: DayCardModeEnum;
  enableMonthReport: boolean;

  [prop: string]: any
}


const CalendarMonthReportsEnhancer = (WrapperComponent: React.ElementType) => {
  return class extends React.Component<ICalendarMonthReportsEnhancerProps, ICalendarMonthReportsEnhancerState> {

    constructor(props: ICalendarMonthReportsEnhancerProps) {
      super(props);
      this.state = this.initialState;
    }

    get initialState() {
      return {
        currentCardMode: DayCardModeEnum.eventReport,
        enableMonthReport: new Date(this.props.date).getDate() === 5,
      }
    }

    toggleCardMode = () => {
      this.setState((state) => ({
        currentCardMode: state.currentCardMode === DayCardModeEnum.eventReport ? DayCardModeEnum.monthReport : DayCardModeEnum.eventReport
      }))
    };

    render() {
      return (<WrapperComponent
        toggleCardMode={this.toggleCardMode}
        currentCardMode={this.state.currentCardMode}
        enableMonthReport={this.state.enableMonthReport}
        {...this.props}
      />);
    }
  }
};

export default CalendarMonthReportsEnhancer;