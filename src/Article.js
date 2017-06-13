import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            hideComments: true
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
            <div>
                <section>{article.text}</section>
                {this.getCommentsBlock()}
            </div>
        )
    }

    getCommentsBlock() {
        if (!this.props.article.comments) return null

        const {hideComments} = this.state
        return (
            <div>
                <button onClick = {this.toggleCommentsView}>
                    {hideComments ? 'show comments' : 'hide comments'}
                </button>
                {this.getCommentsList()}
            </div>
        )
    }

    getCommentsList() {
        if (this.state.hideComments) return null
        const {article} = this.props

        return <CommentList comments = {article.comments} />
    }

    toggleCommentsView = () => {
        this.setState({
            hideComments: !this.state.hideComments
        })
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}