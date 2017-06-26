import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'

export default combineReducers({
    count: counterReducer,
    articles,
    dateRange
})
