import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {

  state = {
      openArticleId: null
  }

  toggleOpenArticle = openArticleId => ev => {
      if (this.state.openArticleId === openArticleId)
      { this.setState({ openArticleId: null }) }
      else {
        this.setState({ openArticleId })
      }
  }

  render () {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
  }
}
