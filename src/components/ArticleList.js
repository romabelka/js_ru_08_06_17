import React, {Component} from 'react'
import Article from './Article'
import PropTypes from "prop-types"
import toggleOpenAccordion from "../decorators/toggleOpenAccordion"

class ArticleList extends Component {

    static propTypes = {
      articles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired
        })
      ).isRequired
    };

    render() {
        const {toggleOpenArticle, openArticleId} = this.props
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

export default toggleOpenAccordion(ArticleList)