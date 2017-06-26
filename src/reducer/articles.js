import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, DATE_RANGE, SELECT} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT : return articleState.filter(article => {
          var payloadValues = payload.map(obj=>obj.value);
          //console.log(payload);
          return payloadValues.includes(article.id)
        })
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case DATE_RANGE: return articleState.filter(article => {if(action.dates.to) return Date.parse(article.date) >= Date.parse(action.dates.from) && Date.parse(article.date) <= Date.parse(action.dates.to)
        else return Date.parse(article.date) >= Date.parse(action.dates.from)})
    }

    return articleState
}
