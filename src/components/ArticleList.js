import React from 'react'
import Article from './Article'
import toggleOpenOneAtATime from '../decorators/toggleOpenOneAtATime'
import PropTypes from 'prop-types'

function ArticleList(props) {
    const {currentlyOpenComponentId, toggleOpen} = props

    const articleElements = props.articles.map(
        article => {
            return (
                <li 
                    key = {article.id}>
                    <Article 
                        article = {article} 
                        isOpen = {currentlyOpenComponentId === article.id}
                        toggleOpen = {toggleOpen(article.id)}
                    />
                </li>
            )            
        }            
    )
    
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = PropTypes.shape({
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            article: PropTypes.shape({
                id: PropTypes.string.isRequired,
                date: PropTypes.string,
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                comments: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    user: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
                }))
            })
        })
    ),
    currentlyOpenComponentId: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
})

export default toggleOpenOneAtATime(ArticleList)