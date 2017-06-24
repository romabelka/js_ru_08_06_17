import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterSelectChange, filterDateChange, dateFromChange, dateToChange} from '../../AC/filters'
import { DateUtils } from 'react-day-picker'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const {handleChange, handleDayClick, articles, filters} = {...this.props}

        return (
            <div>
                <SelectFilter selected={filters.selected} handleChange={handleChange} articles={articles} />
                <DateRange dateRange={filters.dateRange} handleDayClick={handleDayClick} />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}), dispatch => ({
    handleChange: selected => {
        dispatch(filterSelectChange(selected))
    },
    handleDayClick: (day) => {
        const curState = window.store.getState('filters');

        dispatch(filterDateChange(DateUtils.addDayToRange(day, curState.filters.dateRange)))
    }
}))(Filters)