import {combineReducers} from 'redux'
import counterReducer from './counter'

export default combineReducers({
    count: counterReducer
})