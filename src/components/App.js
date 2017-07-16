import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'
import {dictionary} from '../fixtures'

class App extends Component {
    state = {
        username: '',
        language: 'eng'
    }

    static childContextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object,
        language: PropTypes.string
    }
    static contextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object,
        language: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username,
            dictionary,
            language: this.state.language
        }
    }

    render() {
        return (
            <ConnectedRouter history = {history}>
                <div>
                    <div>
                        <h2>{dictionary.mainMenu[this.state.language]}</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/counter">{dictionary.counter[this.state.language]}</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/filters">{dictionary.filters[this.state.language]}</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/articles">{dictionary.articles[this.state.language]}</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/comments">{dictionary.comments[this.state.language]}</NavLink></div>
                    </div>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange} />
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/comments" render = {() => <h1>Component like Articles</h1>} />
                        <Route path = "/filters" component = {Filters} />
                        <Route path = "/articles/new" component = {NewArticle} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = '/comments' component = {CommentsPage} />
                        {/*<Redirect from = '/comments/' to = '/comments/1'/>*/}
                        <Route path = "*" component = {NotFound}/>
                    </Switch>
                    <input type = {'button'} onClick = {this.handleLangChange} value = {this.state.language === 'eng' ? 'Rus' : 'Eng'} />
                </div>
            </ConnectedRouter>
        )
    }

    handleUserChange = (username) => this.setState({ username })

    handleLangChange = () => {
        this.setState({
            language: this.state.language === 'eng' ? 'rus' : 'eng'
        })
    }
}

export default App