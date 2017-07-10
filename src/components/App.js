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

class App extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    state = {
        username: ''
    }

    render() {
        console.log('---', 0)
        return (
            <ConnectedRouter history = {history}>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/articles">Articles</NavLink></div>
                    </div>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange} />
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/filters" component = {Filters} />
                        <Route path = "/articles/new" component = {NewArticle} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = '/comments' component = {CommentsPage} />
                        {/*<Redirect from = '/comments/' to = '/comments/1'/>*/}
                        <Route path = "*" component = {NotFound}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

    handleUserChange = (username) => this.setState({ username })
}

export default App