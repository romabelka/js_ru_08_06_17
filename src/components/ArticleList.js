import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import moment from 'moment'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    articleFiltration(articles, filters) {
        const dateFormatStr = 'YYYYMMDD'
        let selectedIds = []
        let dateRangeFromFormat = ''
        let dateRangeToFormat = ''

        filters.selected.forEach((article) => {
            selectedIds.push(article.value)
        })

        if (filters.dateRange.from) {
            dateRangeFromFormat = moment(filters.dateRange.from).format(dateFormatStr)
        }
        if (filters.dateRange.to) {
            dateRangeToFormat = moment(filters.dateRange.to).format(dateFormatStr)
        }

        return articles.filter((article) => {
            const articleDate = moment(article.date).format(dateFormatStr)

            if ((selectedIds.length && selectedIds.indexOf(article.id) < 0) ||
                (dateRangeFromFormat.length && (articleDate < dateRangeFromFormat)) ||
                (dateRangeToFormat.length && (articleDate > dateRangeToFormat)) ||
                (dateRangeFromFormat.length && !dateRangeToFormat.length && dateRangeFromFormat !== articleDate)
            ) {
                return false
            }

            return article
        })
    }

    render() {
        const { filters, openItemId, toggleOpenItem } = this.props
        const articles = this.articleFiltration(this.props.articles, filters)

        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))