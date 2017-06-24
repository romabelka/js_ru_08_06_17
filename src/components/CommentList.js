import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
<<<<<<< HEAD
import CommentForm from './CommentForm'
=======
import AddComment from './AddComment'
>>>>>>> 589742f76e0022d3b135561b68474d74969dec30
import toggleOpen from '../decorators/toggleOpen'

function CommentList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm />
        </div>
    )

    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
<<<<<<< HEAD
            <CommentForm/>
=======
            <AddComment />
>>>>>>> 589742f76e0022d3b135561b68474d74969dec30
        </div>
    )
}

export default toggleOpen(CommentList)