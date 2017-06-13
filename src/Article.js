import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: {
                article: true,
                comments: true
            }
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick = {this.toggleOpen('article')}>
                    {isOpen.article ? 'close article' : 'open article'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        if (!this.state.isOpen.article) return null
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <section>{article.text}</section>
                {
                    article.comments &&
                    <div>
                        <button onClick = {this.toggleOpen('comments')}>
                            {isOpen.comments ? 'close comments' : 'open comments'}
                        </button>
                        {this.getComments()}
                    </div>
                }
            </div>
        )
    }

    getComments = () => {
        if (!this.state.isOpen.comments) return null
        const
        {    
            article: {
                comments
            }
        } = this.props,
        
        commentElements = comments.map(comment =>
            <li key={comment.id}>
                <h4>{comment.user}</h4>
                <section>{comment.text}</section>
            </li>
        )
        
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    toggleOpen = target => ev => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: {
                ...this.state.isOpen,
                [target]: !this.state.isOpen[target]
            }
        })
    }
}
