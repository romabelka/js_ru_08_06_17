import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 1)
        return (
            <div>
                <ArticleList />
                <Route path = "/articles" render = {this.getIndex} exact />
                <Route path = "/articles/:id" render = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        const { id } = match.params
        return <Article id = {id} isOpen key = {id} />
    }

    getIndex = () => {
        return <h2>Please select article</h2>
    }
}

export default Articles