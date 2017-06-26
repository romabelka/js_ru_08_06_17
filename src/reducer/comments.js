import {normalizedComments as defaulComments} from '../fixtures'
import {} from '../constants'

export default (commentsState = defaulComments, action) => {
    const {type, payload} = action

    switch (type) {
    }

    return commentsState
}