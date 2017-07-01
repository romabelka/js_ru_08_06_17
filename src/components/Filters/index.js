import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterSelectChange, filterDateChange} from '../../AC/filters'
import { DateUtils } from 'react-day-picker'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    handleDayClick = (day) => {
        const {handleDayClick, filters} = this.props;
        return handleDayClick(day, filters);
    };

    render() {
        const {handleChange, articles, filters} = this.props;

        return (
            <div>
                <SelectFilter selected={filters.selected} handleChange={handleChange} articles={articles} />
                <DateRange dateRange={filters.dateRange} handleDayClick={this.handleDayClick} />
            </div>
        )
    }
}

export default connect((state) => ({
    articles: state.articles,
    filters: state.filters
}), dispatch => ({
    handleChange: selected => {
        dispatch(filterSelectChange(selected))
    },
    handleDayClick: (day, filters) => {
        let startRange = filters.dateRange;
        // Фильтр нужно сбросить, чтобы была возможность выбрать начальную дату
        // из диапазона позднее уже выбранной начальной даты
        if (startRange.from && startRange.to) {
            startRange = {
                from: null,
                to: null
            }
        }

        dispatch(filterDateChange(DateUtils.addDayToRange(day, startRange)))
    }
}))(Filters)