import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: '',
    text: ''
})

const ReducerState = Record({
    comments: new OrderedMap({}),
    loading: false,
    loaded: false
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
        return commentsState.updateIn([randomId]: payload.comment)
        
    case LOAD_ALL_COMMENTS + START:
        return commentsState.set('loading', true)
        
    case LOAD_ALL_COMMENTS + SUCCESS:{
        let comments = arrToMap(Array.prototype.slice.call(response.records), CommentRecord)

        return commentsState
            .set('comments', comments)
            .set('loading', false)
            .set('loaded', true)
    }
    }

    return commentsState
}
