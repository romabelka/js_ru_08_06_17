import {DELETE_ARTICLE, INCREMENT, SET_SELECT_ARTICLES} from '../constants'

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

export function setSelectArticles(selected) {
	return {
		type: SET_SELECT_ARTICLES,
		payload:{ selected }
	}
}