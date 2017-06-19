import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }

    toggleOpenArticle = openArticleId => ev => {
        if(this.state.openArticleId === openArticleId) {
            this.setState({
                openArticleId: null
            })
        } else {
            this.setState({
                openArticleId: openArticleId
            })
        }
    }
}
