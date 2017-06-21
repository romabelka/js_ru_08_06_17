import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends PureComponent {
    constructor(props){
        super(props);
        
        this.state = {
            userName: '',
            commentText: ''
        }
        this.handleUserChange = this.handleInputChange('userName');
        this.handleCommentChange = this.handleInputChange('commentText');
    }

    render() {
        let {
            userName,
            commentText
        } = this.state;
        return (
            <div>
                User:
                <input
                    style = {(userName.length < 5 || userName.length > 15) ? {
                       'color':'red'
                    } : {'color':'black'}}
                    type = 'text'
                    value = {userName}
                    onChange = {this.handleUserChange}
                />
                Comment text:
                <input
                    style = {(commentText.length < 20 || commentText.length > 50) ? {
                        'color':'red'
                    } : {'color':'black'}}
                    type = 'text'
                    value = {commentText}
                    onChange = {this.handleCommentChange}
                />
            </div>
        )
    }

    handleInputChange = target => ev => {
        this.setState({
            [target]: ev.target.value
        })
    }
}
