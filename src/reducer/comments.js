import { normalizedComments as defaulComments } from '../fixtures'
import { CREATE_COMMENT } from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action

    switch (type) {
        case CREATE_COMMENT: {
            return {
                ...commentsState,
                [payload.id]: {
                    user: payload.user,
                    text: payload.text
                }
            }
        }
    }

    return commentsState
}
