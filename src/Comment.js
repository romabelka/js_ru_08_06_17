import React, {Component} from 'react';

export default class Comment extends Component {

  render() {
    const {comment} = this.props

    return (
      <section>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </section>
    )
  }
}
