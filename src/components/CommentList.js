import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {loadAllComments} from '../AC'
import Loader from './Loader'

class CommentList extends Component {
    render() {
        let { article, isOpen, toggleOpen, loadAllComments, loaded, loading, comments } = this.props
        
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
                <div>
                <button onClick={toggleOpen}>{text}</button>
                {isOpen && <Comments {...{article, isOpen, loadAllComments, loaded, loading, commentsState: comments}} />}
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

class Comments extends Component {
    componentDidMount() {
        const {loaded, loading, loadAllComments} = this.props
        if (!loaded || !loading) loadAllComments()
    }
    
    render() {
        let {article: {comments = [], id}, loading, commentsState} = this.props
        
        if (loading) return <Loader />
        
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
        
        return (
            <div>
                <ul>
                {comments.map(id =>
                              <li key={id}>
                              <Comment comment = {commentsState.get(id)}/>
                              </li>
                             )}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default toggleOpen(connect((state) => {
    return {
        comments: state.comments.comments,
        loading: state.comments.loading,
        loaded: state.comments.loaded
    }
}, {loadAllComments})(CommentList))
