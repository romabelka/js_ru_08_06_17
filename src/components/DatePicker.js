import React, { Component } from 'react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class DatePicker extends Component {
    state = {
        endDate: null,
        startDate: null,
        focusedInput: null
    };

    render() {
        console.log(this.state)

        return(
            <div className="datepicker__wrap">
                <div className="datepicker">
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={this.changeDate} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>
                <div className="datepicker__selected-date">
                    {this.state.startDate ? this.state.startDate.format('DD.MM.YYYY') : ''}
                    {this.state.startDate && this.state.endDate ? ' - ' : ''}
                    {this.state.endDate ? this.state.endDate.format('DD.MM.YYYY') : ''}
                </div>
            </div>
        );
    }

    changeDate = ({ startDate, endDate }) => this.setState({ startDate, endDate });
}