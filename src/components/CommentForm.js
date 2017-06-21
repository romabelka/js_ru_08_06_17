import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentFrom extends Component {
    state = {
      userInput: '',
      textInput: ''
    }
    handleUserInput = ev => {
      this.setState({userInput: ev.target.value})
    }
    handleTextInput = ev => {
      this.setState({textInput: ev.target.value})
    }
    render () {
      return (<div>
        <input type='text' value = {this.state.userInput} onChange={this.handleUserInput}/>
        <input type='text' value = {this.state.textInput} onChange={this.handleTextInput}/>
        </div>)
    }
}
