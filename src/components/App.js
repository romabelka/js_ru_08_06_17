import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'

class App extends Component {
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
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
                <ArticlesChart articles = {this.props.articles} />
            </div>
        )
    }
}

export default App