import React, {Component} from 'react';

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {comments} = this.props || [];
        const {isOpen} = this.state;
        
        if (comments.length) {
            return(
                <div>
                    <button onClick = {this.toggleOpen}>
                        {isOpen ? 'hide comments' : 'show comments'}
                    </button>
                    {this.getCommentsList()}
                </div>
            );
        }

        return(
            <div>No comments</div>
        );
    }

    getCommentsList() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        const commentElements = comments.map(comment => <li key = {comment.id}>{comment.text}</li>);

        return (<ul>{commentElements}</ul>)
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}