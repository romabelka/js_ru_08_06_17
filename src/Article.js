import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                {this.getControls()}
                {this.getContent()}
                {this.getComments()}
            </div>
        )
    }

    getControls() {
        const {isOpen} = this.state
        return (
            <button onClick = {this.toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button>
        )
    }

    getContent() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    getComments() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        const comments = article.comments
        return comments && <section><CommentList comments = {comments}/></section>
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}