import React, {Component} from "react"

export default (NewComponent) => class ToggleFunctionality extends Component {

  state = {
    openArticleId: null
  }

  render () {
    return <NewComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
  }

  toggleOpenArticle = openArticleId => ev => {
    let {openArticleId: previousCurrentId} = this.state

    if (previousCurrentId === openArticleId) {
      this.setState({openArticleId: null})
    } else {
      this.setState({openArticleId})
    }
  }

}