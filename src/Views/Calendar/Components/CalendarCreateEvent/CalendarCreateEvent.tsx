import * as React from 'react';
import {Button, ButtonAsEnum} from "../../../../Components/Button/Button";
import SelectDataPicker from "../../../../Components/SelectDataPicker/SelectDataPicker";
import {withRouter, RouteComponentProps} from "react-router";

interface ICalendarCreateEventProps {
  [prop: string]: any
}

const CalendarCreateEventButton = ({onClick}: any)=>{
  return (<Button onClick={onClick} as={ButtonAsEnum.button}>
    Создать мероприятие
  </Button>)
};


class CalendarCreateEvent extends React.Component<RouteComponentProps<ICalendarCreateEventProps>>{

  render(){

    return (
        <SelectDataPicker
          minDate={new Date()}
          onChange={(props: any)=>{
            this.props.history.push(`/event/create/${new Date(props).toISOString()}`)
          }}
            customInput={<CalendarCreateEventButton/>}
        />
      )
  }
}

export default withRouter(CalendarCreateEvent);