import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to="/articles">Articles</NavLink></div>
                    </div>
                    <UserForm />
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/filters" component = {Filters} />
                        <Route path = "/articles/new" component = {NewArticle} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = "*" component = {NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App