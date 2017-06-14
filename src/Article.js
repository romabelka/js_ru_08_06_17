import React, {Component} from 'react'
import Comments from './Comments'

export default class Article extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        console.log(article.comments);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}

                <Comments data={article.comments}/>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
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