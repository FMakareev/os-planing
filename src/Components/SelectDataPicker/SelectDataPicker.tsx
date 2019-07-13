import * as React from 'react';
import DatePicker from "react-datepicker";


interface ISelectDataPickerProps {
  [prop: string]: any;
}

export class SelectDataPicker extends React.Component<ISelectDataPickerProps, any> {
  constructor(props: ISelectDataPickerProps) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date: any) {
    this.setState({
      startDate: date
    });
    this.props.onChange && this.props.onChange(date);
  }

  render() {
    const {label,customInput} = this.props;
    return (
      <React.Fragment>
        <DatePicker
          dateFormat="d.MM.yyyy"
          className="form__input form__input--date"
          selected={this.state.startDate}
          onChange={this.handleChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="scroll"
          customInput={customInput}
        />
        <label className="form__label">{label}</label>
      </React.Fragment>

    );
  }
}

export default SelectDataPicker;