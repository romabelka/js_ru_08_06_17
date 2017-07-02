import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

function CommentList({comments = [], isOpen, toggleOpen, articleId}) {
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen, articleId})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    articleId: PropTypes.string,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({comments, isOpen, articleId}) {
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
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {articleId}/>
        </div>
    )
}

export default toggleOpen(CommentList)