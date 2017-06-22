import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {

    };

    render() {
        const {articles} = this.props

        return (
            <div>
                <Counter />
                <UserForm />
                <Filters articles = {articles} />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App