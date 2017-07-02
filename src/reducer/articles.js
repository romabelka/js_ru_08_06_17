import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article
    return acc
}, {})

export default (articleState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
    case DELETE_ARTICLE: {
            let articles = Object.assign({}, articleState)
            delete articles[payload.id]
            return articles
        }
        case CREATE_COMMENT: {
            const comments = articleState[payload.articleId].comments.slice()
            comments.push(payload.id)
            const obj =  {
                ...articleState,
                [payload.articleId]: {
                    ...articleState[payload.articleId],
                    comments
                }
            }
        return obj
        }
    }

    return articleState
}
