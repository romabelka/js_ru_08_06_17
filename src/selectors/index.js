import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    const filtratedArticles = Object.create(null);

    Object.getOwnPropertyNames(articles).map(articleId => {
        const article = articles[articleId]
        const published = Date.parse(article.date)
        if ((!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to)))
            filtratedArticles[articleId] = article
    })

    return filtratedArticles
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'getting comment', id)
    return comments[id]
})
