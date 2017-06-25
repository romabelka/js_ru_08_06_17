import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectReducer from './select'
import dateRangeReducer from './dateRange'

export default combineReducers({
    count: counterReducer,
    articles,
	selected: selectReducer,
	dateRange: dateRangeReducer
})