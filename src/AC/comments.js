import {ADD_COMMENT} from '../constants'

export function addComment(payload, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { ...payload },
        articleId: articleId
    }
}
