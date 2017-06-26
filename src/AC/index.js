import {DELETE_ARTICLE, INCREMENT} from '../constants'

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
