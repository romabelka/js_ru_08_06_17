import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import SelectDayPicker from './DayPicker'

class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
                <SelectDayPicker />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App