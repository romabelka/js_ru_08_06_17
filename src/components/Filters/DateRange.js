import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {setDate} from '../../AC'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
    	date: PropTypes.shape({
		    from: PropTypes.object,
		    to: PropTypes.object
	    }),
	    setDate: PropTypes.func.isRequired
    }

    handleDayClick = (day) => {
    	const {setDate, date} = this.props
    	setDate(DateUtils.addDayToRange(day, date))
    }

    render() {
        const { from, to } = this.props.date;
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

export default connect(state => ({date: state.dateRange}), {setDate})(DateRange)