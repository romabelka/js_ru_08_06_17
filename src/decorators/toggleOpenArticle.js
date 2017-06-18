import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
      openArticleId: null
  }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        if (openArticleId === this.state.openArticleId) {
          this.setState({ openArticleId: null })
        } else {
          this.setState({ openArticleId })
        }
    }
}
