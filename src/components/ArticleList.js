import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordeon from '../decorators/accordeon'

class ArticleList extends Component {

    render() {
        const {openArticleId, toggleOpenArticle, articles} = this.props
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default Accordeon(ArticleList)