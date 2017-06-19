import React, {Component} from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

//еще propTypes нужны были
class ArticleList extends Component {
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

export default toggleOpenArticle(ArticleList)
