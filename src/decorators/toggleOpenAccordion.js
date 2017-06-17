import React, {Component} from "react"

export default (NewComponent) => class ToggleFunctionality extends Component {

  state = {
    openArticleId: null
  }

  render () {
    return <NewComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
  }

  toggleOpenArticle = openArticleId => ev => {
    this.setState({ openArticleId })
  }
}