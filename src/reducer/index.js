import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'

export default combineReducers({
    count: counterReducer,
    articles, comments, filters,
    router: routerReducer
})