import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    const filtered = {}

    Object.keys(articles).forEach((key) => {
        const published = Date.parse(articles[key].date)

        if ((!selected.length || selected.includes(key)) &&
        (!from || !to || (published > from && published < to))) {
            filtered[key] = articles[key]
        }
    })
    return filtered
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'getting comment', id)
    return comments[id]
})