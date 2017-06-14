import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                {this.getControls()}
                {this.getComments()}
            </div>
        )
    }

    getControls() {
        const {isOpen} = this.state
        return (
            <button onClick = {this.toggleOpen}>
                {isOpen ? 'hide comments' : 'show comments'}
            </button>
        )
    }

    getComments() {
        if (!this.state.isOpen) return null
        const {comments} = this.props
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}