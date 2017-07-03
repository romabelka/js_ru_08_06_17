import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.object.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        console.log('---', 'update article list')
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = Object.keys(articles).map(key => 
        <li key={key}>
            <Article
                article = {articles[key]}
                isOpen = {key === openItemId}
                toggleOpen = {toggleOpenItem(key)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }
})(accordion(ArticleList))