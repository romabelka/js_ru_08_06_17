import {
    DELETE_ARTICLE,
    INCREMENT,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTION,
    CREATE_COMMENT
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

export function createComment(user, text, articleId) {
    return {
        type: CREATE_COMMENT,
        payload: { user, text, articleId }
    }
}
