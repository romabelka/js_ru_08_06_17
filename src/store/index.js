import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'

const enhancer = applyMiddleware(randomId, logger)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store