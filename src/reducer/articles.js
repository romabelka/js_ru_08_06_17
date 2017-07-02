import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

 const defaultArticles = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article
    return acc
 }, {})

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    articleState = Object.assign({}, articleState)

    switch (type) {
        case DELETE_ARTICLE:
            delete articleState[payload.id]
            return articleState
    }

    return articleState
}