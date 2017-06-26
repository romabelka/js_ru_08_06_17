import {DELETE_ARTICLE, INCREMENT, SELECT} from '../constants'

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


export function selectDateRange(dates) {
  return {
    type: 'DATE_RANGE',
    dates: dates
  }
}

export function select(articles) {
  return {
    type: SELECT,
    payload: articles
  }
}
