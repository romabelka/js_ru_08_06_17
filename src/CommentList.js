import React , {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component  {
  static defaultProps = {
    comments: []
  }
  constructor(props) {
    super(props)
    this.state = {
      isShown: false
    }
  }

  toggleShowComments = (ev) => {
    ev.preventDefault();
    console.log('---', ev.nativeEvent)
    //if(!this.state.isShown) return null
    this.setState({isShown: !this.state.isShown})
  }
  showComments () {
    if (this.state.isShown) {
      const comments = this.props.comments;
      const commentElements = comments.map(comment => <Comment key ={comment.id} comment = {comment}/>);
      return  (<ul>{commentElements}</ul>)
    }
  }

  render() {
    const isShown = this.state.isShown;
    return (
      <div>
        <button onClick={this.toggleShowComments}>{isShown ? 'show comments' : 'hide comments'}</button>
        {this.showComments()}
      </div>
    )
  }
}
