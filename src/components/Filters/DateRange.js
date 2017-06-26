import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

import dateRange from '../../reducer/dateRange'
import {connect} from 'react-redux'
import {selectDateRange} from '../../AC'
class DateRange extends Component {
//    state = {
//        from: null,
//        to: null
//    }

    handleDayClick = (day) => {
        this.props.selectDateRange(DateUtils.addDayToRange(day, this.props.dates))
        //this.setState(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { from, to } = this.props.dates;
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

export default connect((state)=>({dates :{from: state.dateRange.from, to: state.dateRange.to}}) , {selectDateRange})(DateRange)
