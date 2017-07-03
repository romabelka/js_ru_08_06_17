import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import createComment from '../middlewares/createComment'

const enhancer = applyMiddleware(createComment, logger)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store