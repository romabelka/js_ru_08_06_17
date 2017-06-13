import React, {Component} from 'react'
import CommentList from './commentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
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
        return (<section>
                    <article>{article.text}</article>
                    {this.getComments(article)}
                </section>)
    }

    getComments(article) {
        const {comments} = article;
        if ( !comments ) {
            return null;
        }

        return <CommentList comments={comments} />
    }

    toggleOpen = (ev) => {

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}