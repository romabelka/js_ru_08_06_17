import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    };

    render() {
        const {openId, toggleOpenArticle} = this.props;

        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openId}
                toggleOpenArticle = {toggleOpenArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default toggleOpen(ArticleList);