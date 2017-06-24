import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
<<<<<<< HEAD
import Filters from './Filters'
import Counter from './Counter'
=======
import Calendar from './Calendar'
import Select from 'react-select'
>>>>>>> 589742f76e0022d3b135561b68474d74969dec30
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
<<<<<<< HEAD
                <Counter />
                <UserForm />
                <Filters articles = {[]} />
                <ArticleList />
=======
                <Calendar />
                <UserForm />
                <Select 
                    options = {options} 
                    value = {this.state.selection} 
                    onChange = {this.changeSelection} 
                    multi 
                />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
>>>>>>> 589742f76e0022d3b135561b68474d74969dec30
            </div>
        )
    }
}

export default App