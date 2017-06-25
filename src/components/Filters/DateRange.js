import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        dateRange: PropTypes.object.isRequired
    }
    
    handleDayClick = day => {
        let {filterDate, dateRange } = this.props;
        filterDate(DateUtils.addDayToRange(day, dateRange))
    }

    render() {
        const { dateRange: { from, to } } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange
