import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS,
    START, SUCCESS
} from '../constants'
import {OrderedMap, Record} from 'immutable'

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (articleState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articleState.updateIn(
                ['entities', payload.articleId, 'comments'],
                comments => comments.concat(randomId)
            )

        case LOAD_ALL_ARTICLES + START:
            return articleState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articleState
                .update('entities', entities => arrToMap(response, ArticleRecord).merge(entities))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ARTICLE + START:
            return articleState.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response))

        case LOAD_ARTICLE_COMMENTS + START:
            return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return articleState
                .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
    }

    return articleState
}