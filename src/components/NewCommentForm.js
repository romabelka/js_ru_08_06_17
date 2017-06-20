import React, { Component } from 'react'

const WARNING_COLOR = '#ff0000'
const INITIAL_COLOR = 'initial'

export default class NewCommentForm extends Component {

    render() {

        return (
            <form>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input name="userName" type="text" onChange={this.validateField(5, 15)}/>
                </div>
                <div>
                    <label>Comment</label>
                    <div>
                        <textarea name="comment" onChange={this.validateField(20, 50)} />
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

    validateField = (minLength, maxLength) => ev => {
        let field = ev.target
        const inputLength = ev.target.value.length

        if(inputLength > maxLength) {
            field.style.borderColor = WARNING_COLOR
        }else {
            field.style.borderColor = INITIAL_COLOR
        }

        if(inputLength < minLength) {
            field.style.borderColor = WARNING_COLOR
        }else {
            field.style.borderColor = INITIAL_COLOR
        }
    }
}
