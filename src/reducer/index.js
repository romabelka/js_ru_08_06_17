import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'
import select from './select'

export default combineReducers({
    count: counterReducer,
    articles,
    dateRange,
    select
})
