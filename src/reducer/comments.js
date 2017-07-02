import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            const newState = Object.assign({}, commentsState)
            newState[payload.id] = payload
            return newState
    }

    return commentsState
}