import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    render() {
        //const {handleDayClick} = this.props
        const { from, to } = this.props.dateRange;
        const { handleDayClick } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange