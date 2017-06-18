import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.props.openArticleId}
                toggleOpenArticle = {this.props.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default toggleOpenArticle(ArticleList)
