import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_ALL_COMMENTS, SUCCESS, START} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record, OrderedSet} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    offsets: new OrderedMap({})
})

const OffsetRecord = Record({
    loading: false,
    loaded: false,
    comments: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action


    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

        case LOAD_ALL_COMMENTS + START: {
            let offsets = commentsState.setIn(
                ['offsets', payload.offset], 
                new OffsetRecord({
                    loaded: true,
                    loading: false
                })
            );

            return offsets;
        }

        case LOAD_ALL_COMMENTS + SUCCESS: {
            let entities = commentsState.update(
                'entities', 
                entities => entities.merge(arrToMap(response.records, CommentRecord))
            );

            let offsets = entities.setIn(
                ['offsets', payload.offset],
                {
                    loaded: true,
                    loading: false,
                    comments: OrderedSet(response.records.map(comment => comment.id))
                }
            );

            return offsets.setIn(['offsets', 'total'], response.total);
        }
    }

    return commentsState
}