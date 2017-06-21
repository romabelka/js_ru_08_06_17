import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/form.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        userComment: '',
        textError: false,
        nameError: false
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Ваше имя:</h3>
                    <input type="text" value = {this.state.username}
                        onChange = {this.handleChangeName}
                        className={this.state.nameError ? 'inp-error' : ''}/>
                </div>
                <div>
                    <h3>Ваш комментарий</h3>
                    <textarea value = {this.state.userComment}
                        onChange = {this.handleChangeText}
                        className={this.state.textError ? 'inp-error' : ''}
                    ></textarea>
                </div>

            </div>
        )
    }


    handleChangeName = (ev) => {
        let isError = false;
        if (ev.target.value.length > 0 && ev.target.value.length < 5 || ev.target.value.length > 15) {
            isError = true;
        }

        this.setState({
            username: ev.target.value,
            nameError: isError
        })
    }

    handleChangeText = (ev) => {
        let isError = false;
        if (ev.target.value.length > 0 && ev.target.value.length < 20 || ev.target.value.length > 50) {
            isError = true;
        }

        this.setState({
            userComment: ev.target.value,
            textError: isError
        })
    }
}

export default CommentForm