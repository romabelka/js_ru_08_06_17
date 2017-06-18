import React, {Component} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        openArticleId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    }
    
    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.props.openArticleId}
                toggleOpen = {this.props.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordeon(ArticleList)
