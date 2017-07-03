import uuid from 'uuid'
import {CREATE_COMMENT} from '../constants'

export default store => next => action => {
    if (action.type === CREATE_COMMENT) {
        action.payload.id = uuid()
    }
    next(action)
}
