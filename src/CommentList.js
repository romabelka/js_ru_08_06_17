import React, {Component} from 'react'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {isOpen} = this.state

        return (
            <div>
                <h5>{'Comments'}</h5>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Сlose comments' : 'Open comments'}
                </button>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        const {comments} = this.props

        if (!comments) {
            return <p>Comments is empty.</p>
        }

        if (!this.state.isOpen) return null

        const commentElements = comments.map(comment =>
            <li key = {comment.id}>
                <h5>{`User: ${comment.user}` }</h5>
                <p>{comment.text}</p>
            </li>
        )

        return <ul>
            {commentElements}
        </ul>
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
