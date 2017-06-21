import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './commentForm.css'

export default class CommentFrom extends Component {
    state = {
      userInput: '',
      textInput: ''
    }
    showColor (input) {
      if(input.length < 5 || input.length >= 15 ) return 'red'
    }
    handleUserInput = ev => {
      this.setState({userInput: ev.target.value})
    }
    handleTextInput = ev => {
      this.setState({textInput: ev.target.value})
    }
    render () {
      return (<div>
        <input type='text' value = {this.state.userInput} onChange={this.handleUserInput} className={this.showColor(this.state.userInput)}/>
        <input type='text' value = {this.state.textInput} onChange={this.handleTextInput} className={this.showColor(this.state.textInput)}/>
        </div>)
    }
}
