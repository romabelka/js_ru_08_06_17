import React, {Component} from 'react'

export default class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      availableComments: false
    }
  }
  render () {
    const {availableComments} = this.state
    const buttonText = availableComments ? "Hide comments" : "Show comments"

    return(
      <div>
        <button onClick = {this.changeState}>{buttonText}</button>
        {this.getListComments()}
      </div>
    )
  }

  changeState = () => {
    this.setState({
      availableComments: !this.state.availableComments
    })
  }

  generateComments () {
    const {comments} = this.props;
    if (!comments) {
      return <li>No comments</li>
    } else {
      return comments.map(comment => <li key = {comment.id}>{comment.text}</li>);
    }
  }

  getListComments () {
    const {availableComments} = this.state

    if (!availableComments) return null
    return (<ul>{this.generateComments()}</ul>)
  }
}