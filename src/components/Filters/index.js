import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterSelect, filterDate} from '../../AC'

class Filters extends Component {
    render() {
        let {selected, filterSelect, filterDate, allArticles, dateRange} = this.props;
        
        return (
            <div>
                <SelectFilter {...{selected, filterSelect, allArticles}} />
                <DateRange {...{dateRange, filterDate}} />
            </div>
        )
    }
}

export default connect(state => ({
    allArticles: state.articlesState.allArticles,
    selected: state.articlesState.selected,
    dateRange: state.articlesState.dateRange
}),
{
    filterSelect,
    filterDate
})(Filters)
