import React, {Component} from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
  render() {
    const {comments} = this.props
    const commentElements = comments.map(comment =>
      <li key = {comment.id} >
        <Comment comment = {comment} />
      </li>
    )

    return (<ul>{commentElements}</ul>)
  }
}
