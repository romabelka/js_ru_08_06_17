import React from 'react'
import Article from './Article'
import toggleOpenOneAtATime from '../decorators/toggleOpenOneAtATime'

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

export default toggleOpenOneAtATime(ArticleList)