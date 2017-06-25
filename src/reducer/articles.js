import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_DATE, FILTER_SELECT} from '../constants'

const initialState = {
    articles: defaultArticles,
    selected: [],
    allArticles: defaultArticles,
    dateRange: {
        from: null,
        to: null
    }
}

export default (articleState = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return {
            ...articleState,
            articles: articleState.articles.filter(article => article.id !== payload.id)
        };
        
        case FILTER_DATE: {
            return {
                ...articleState,
                dateRange: {from: payload.date.from, to: payload.date.to},
                articles: completeCheck(articleState.allArticles, payload.date, articleState.selected),
            }
        }
        
        case FILTER_SELECT: return {
            ...articleState,
            articles: completeCheck(articleState.allArticles, articleState.dateRange, payload.selected),
            selected: payload.selected
        }
    }

    return articleState
}

const completeCheck = (articles, date, selected) => {
    let filteredArticles = getFilteredByDateArticles(articles, date);
    filteredArticles = getSelectedArticles(filteredArticles, selected);
    return filteredArticles;
}

const getFilteredByDateArticles = (articles, date) => {
    if (date.from && date.to) {
        let filtered =  articles.filter(article => {
            let articleDate = new Date(article.date);
            return articleDate >= date.from && articleDate <= date.to
        })
        return filtered;
    }
    return articles;
}

const getSelectedArticles = (articles, selected) => {
    if (selected.length > 0) {
        let selectedLabels = {};
        selected.map(selected => selectedLabels[selected.label] = true);

        let articlesSelected = [];
        articles.map(article => {
            if (selectedLabels[article.title])
                articlesSelected.push(article);
        });
        
        return articlesSelected;
    }
    return articles;
}
