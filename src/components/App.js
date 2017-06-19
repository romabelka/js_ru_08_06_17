import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
                <ArticleList articles = {this.props.articles} />
                <ArticlesChart articles = {this.props.articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App