import React, {Component} from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
        isOpen: true
    }
  }

  render() {
    const {comments} = this.props
    const {isOpen} = this.state

    if (Array.isArray(comments)) {
      const commentElements = comments.map(comment => {
        return (
          <div key = {comment.id}>
            <p style={{color: '#ccc'}}>From: {comment.user}</p>
            <p>Comment: {comment.text}</p>
          </div>
        )
      })

      if (!this.state.isOpen) {
        return (
          <div>
            <button onClick = {this.toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button>
          </div>
        )
      }

      return (
        <div>
          <button onClick = {this.toggleOpen}>
              {isOpen ? 'close' : 'open'}
          </button>
          {commentElements}
        </div>
      )
    } else {
      return null
    }
  }


  toggleOpen = (ev) => {
      ev.preventDefault()
      this.setState({
          isOpen: !this.state.isOpen
      })
  }
}
