import React from 'react'
import Article from './Article'

export default function ArticleList({ data }) {
	const articleElements = data.map(article => <li key = {article.id}><Article article = {article}/></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}