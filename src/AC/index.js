import {DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT,
        LOAD_ALL_ARTICLES, LOAD_ALL_COMMENTS, LOAD_ARTICLE, START, SUCCESS, FAIL
} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENTS,
        callAPI: '/api/comment'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { id, response }
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: { id, error }
            }))
    }
}

/*
export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        callAPI: `/api/article/${id}`
    }
}
*/
