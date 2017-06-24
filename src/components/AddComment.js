import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddComment extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        testMess: ''
    }

    render() {
        return (
            <div>
                <p>Add new comment</p>
                <form>
                    <input type = 'text' placeholder="User Name" value = {this.state.username} onChange = {this.handleUserChange} />
                    <textarea type = 'text' placeholder="Comments" value = {this.state.testMess} onChange = {this.handleCommentChange}/>
                </form>
            </div>
        )
    }


    handleUserChange = (ev) => {
        if (ev.target.value.length < 5 || ev.target.value.length > 15){
            ev.target.style.border = '2px solid red'
        } else{
            ev.target.style.border = ''
        }
        this.setState({
            username: ev.target.value
        })
    }

    handleCommentChange = (ev) => {
        if (ev.target.value.length < 20 || ev.target.value.length > 50){
            ev.target.style.border = '2px solid red'
        } else{
            ev.target.style.border = ''
        }

        this.setState({
            testMess: ev.target.value
        })
    }

}

export default AddComment