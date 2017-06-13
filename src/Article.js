import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isArticleOpen: true,
      isCommentListOpen: true
    }
  }

  render() {
    const {article} = this.props
    const {isArticleOpen} = this.state
    const {isCommentListOpen} = this.state

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleArticle}>
            {isArticleOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}

        {this.getCommentButton()}
        {this.getCommentList()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isArticleOpen) return null
    const {article} = this.props
    return <section>{article.text}</section>
  }

  toggleArticle = (ev) => {
    ev.preventDefault()
    console.log('---', ev.nativeEvent)
    this.setState({
        isArticleOpen: !this.state.isArticleOpen
    })
  }

  getCommentList() {
    const {article} = this.props
    const {isArticleOpen} = this.state
    const {isCommentListOpen} = this.state

    if (isArticleOpen && isCommentListOpen && article.comments) {
      return <CommentList comments = {article.comments} />
    }
  }

  getCommentButton() {
    const {isArticleOpen} = this.state
    const {isCommentListOpen} = this.state

    if (isArticleOpen) {
      return(
        <button onClick = {this.toggleCommentList}>
          {isCommentListOpen ? 'Close comments' : 'Open comments'}
        </button>
      )
    }
  }

  toggleCommentList = () => {
    this.setState({
      isCommentListOpen: !this.state.isCommentListOpen
    })
  }
}
