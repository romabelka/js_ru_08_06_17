import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
               {article.text}
               <CommentList comments = {article.comments}/>
            </section>
        )
    }
}

export default toggleOpen(Article)