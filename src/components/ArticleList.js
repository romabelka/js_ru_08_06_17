import React, {Component} from 'react'
import Article from './Article'
import Accordeon from '../decorators/Accordeon.js'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                date: PropTypes.string,
                title: PropTypes.string,
                text: PropTypes.string.isRequired,
                comments: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    user: PropTypes.string,
                    text: PropTypes.string.isRequired,
                })
            })
        ).isRequired
    };

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.props.accordeon.openItemID}
                toggleOpen = {this.props.accordeon.toggleItem(article.id)}
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