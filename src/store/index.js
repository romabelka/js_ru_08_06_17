import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import uuid from '../middlewares/uuid'

const enhancer = applyMiddleware(logger, uuid)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
