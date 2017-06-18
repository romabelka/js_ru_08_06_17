import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {
        const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map(article =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpenArticle(article.id)}
                />
            </li>
        )

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)
