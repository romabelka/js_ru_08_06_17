import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    render() {
        const {article, isOpen, toggleOpenArticle} = this.props;

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpenArticle}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('---', ref)
    };

    componentDidMount() {
        console.log('---', 'mounted')
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
               {article.text}
               <CommentList comments = {article.comments} ref = {this.setCommentsRef}/>
            </section>
        )
    }

    setCommentsRef = ref => {
//        console.log('---', findDOMNode(ref))
    }
}

export default Article