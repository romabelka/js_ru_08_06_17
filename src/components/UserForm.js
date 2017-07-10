import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                Name: <input type = 'text' value = {this.props.value} onChange = {this.handleUserChange} />
            </div>
        )
    }


    handleUserChange = (ev) => {
        if (ev.target.value.length > 10) return
        this.props.onChange(ev.target.value)
    }

}

export default UserForm