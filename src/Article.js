import React, {Component} from 'react'
import Comments from './Comments'

export default class Article extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isComments: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const {isComments} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close text' : 'open text'}
                </button>
                {this.getBody()}
                <button onClick = {this.toggleOpenComments}>
                    {isComments ? 'close comments' : 'open comments'}
                </button>
                {this.getComments()}
            </div>
        )
    }

    toggleOpenComments = (ev) => {
        ev.preventDefault()
        this.setState({
            isComments: !this.state.isComments
        })
    }

    getComments() {
        if (!this.state.isComments){
            return null
        }
        const {article} = this.props
        return <Comments data={article.comments}/>
    }

    getBody() {
        if (!this.state.isOpen){ 
            return null
        }
        const {article} = this.props
        return <section>{article.text}</section>
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}