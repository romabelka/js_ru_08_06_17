import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action
    let curCommentState = {...commentsState}

    switch (type) {
        case ADD_COMMENT: {
            curCommentState[payload.id] = payload
            return curCommentState
        }
    }

    return curCommentState
}