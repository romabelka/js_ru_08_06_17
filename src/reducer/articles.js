import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article
    return acc
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload, articleId} = action
    let newState = {...articleState}

    switch (type) {
        case DELETE_ARTICLE: {
            delete newState[payload.id]
            return newState
        }
        case ADD_COMMENT: {
            if (!newState[articleId].comments) {
                newState[articleId].comments = []
            }
            newState[articleId].comments.push(payload.id)

            return newState
        }
    }

    return articleState
}