import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle, loadArticle} from '../../AC'
import Loader from '../Loader'
import './style.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }
    
    static contextTypes = {
        dictionary: PropTypes.object,
        language: PropTypes.string
    }

    state = {
        updateIndex: 0,
        areCommentsOpen: false
    }

    // componentWillUpdate() {
    //     console.log(this.props)
    //     debugger
    // }

    componentDidMount() {
        const {loadArticle, article, id} = this.props
        if (!article  || (!article.text && !article.loading)) loadArticle(id)
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger
    // }


    render() {
        const {article, isOpen, toggleOpen} = this.props
        if (!article) return null
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 
                    this.context.dictionary.close[this.context.language] 
                    : 
                    this.context.dictionary.open[this.context.language]}
                </button>
                <button onClick = {this.handleDelete}>{this.context.dictionary.delete[this.context.language]}</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('---', 'deleting article')
    }

    setContainerRef = ref => {
        this.container = ref
    }

    getBody() {
        const {article, isOpen} = this.props
        
        if (!isOpen) return null
        if (article.get('loading')) return <Loader/>
        return (
            <section>
               {article.text}
                <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>{this.context.dictionary.update[this.context.language]}</button>
               <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
            </section>
        )
    }

    setCommentsRef = ref => {
        this.comments = ref
//        console.log('---', ref)
    }
}

export default connect((state, ownProps) => {
    const buffer = state.articles.entities.get(ownProps.id)
        return {
            article: buffer
        }
    },
    { deleteArticle, loadArticle },
    null,
    { pure: false }
)(Article)