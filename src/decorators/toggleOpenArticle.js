import React, {Component as ReactComponent} from 'react'

//WrappedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class WrappedComponent extends ReactComponent {

  state = {
      //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
