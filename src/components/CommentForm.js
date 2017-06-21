import React from 'react'
import PropTypes from 'prop-types'
import './CommentForm.css'

export default class CommentForm extends React.Component {
    state = {
        username: '',
        comment: '',
        usernameValid: true,
        commentValid: true 
    }
    
    handleUsernameChange = ev => {
        ev.preventDefault();
        
        const {value} = ev.target
        const {length} = ev.target.value
        
        this.setState({
            username: value,
            usernameValid: (length >= 5 && length <= 15),
        })
    }

    handleCommentChange = ev => {
        ev.preventDefault();

        const {value} = ev.target
        const {length} = ev.target.value
        
        this.setState({
            comment: value,
            commentValid: (length >= 20 && length <= 50),
        })
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value = {this.state.username} 
                    onChange = {this.handleUsernameChange}
                    className = {this.state.usernameValid ? 'username-valid' : 'username-invalid'}
                />
                <textarea 
                    value = {this.state.comment} 
                    cols="20" 
                    rows="4"
                    onChange = {this.handleCommentChange}
                    className = {this.state.commentValid ? 'comment-valid' : 'comment-invalid'}
                />
            </form>
        )
    }
}