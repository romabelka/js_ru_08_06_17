import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action
    const newAction = Object.assign({}, action)

    if (type === ADD_COMMENT) {
        newAction.payload.id = getId()
    }

    next(newAction)
}

function getId(min = 1000, max = 1000000) {
    const id = '' + (Math.floor(Math.random() * (max - min)) + min)
    
    if(isFree(id)){
        return id
    }
    return getId()
}

function isFree(id) {
    return true
}