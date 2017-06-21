import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {

    };

    state = {
      from: null,
      to: null
    }

    handleDayClick = day => {
      const range = DateUtils.addDayToRange(day, this.state)
      this.setState(range)
    }


    handleResetClick = e => {
      e.preventDefault();
      this.setState({from: null, to: null})
    }

    displayInterval(start, end) {
      if(!start && !end) return <p>Please select first day</p>
      else if (start && !end) return <p>Please select last day!</p>
      else { // Как передать start и stop в этот JSX. Если так, то пишет ошибку- Objects are not valid as a React child
        return (<div>
                <p>Your choose from {start} to {end}</p>
                <a href="." onClick={this.handleResetClick}>Reset</a>
              </div>)
      }
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const {from, to } = this.state
        return (
            <div>
                <div className="RangeExmple">
                    {this.displayInterval(from,to)}
                  <DayPicker
                     numberOfMonths={2}
                     selectedDays={[from, { from, to }]}
                     onDayClick={this.handleDayClick}
                     fixedWeeks
                   />
                </div>
                <UserForm />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App
