import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'

export default combineReducers({
    count: counterReducer,
    articles,
    filters
})