import React from 'react';
import Comment from './Comment'

export default class CommentList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'close comments' : 'open comments'}
                </button>
                {this.getFormattedComments()}
            </div>
        )
    }

    getFormattedComments() {
        if (!this.state.isOpen) {
            return null
        }

        const {comments} = this.props
        
        if (!comments) {
            return null
        }

        const formattedComments = comments.map((comment) => {
            return (<li key = {comment.id}><Comment comment = {comment} /></li>)
        })

        return (<ul>{formattedComments}</ul>)
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}