import React, {Component as ReactComponent} from 'react'

export default (AccordionComponent) => class ReadyAccComponent extends ReactComponent {
    state = {
        openArticleId: null
    }

    render() {
        return 
            <AccordionComponent 
                {...this.props} 
                {...this.state} 
                toggleOpenArticle = {this.toggleOpenArticle} 
            />
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({ 
            openArticleId: (openArticleId !== this.state.openArticleId ? openArticleId : false) 
        })
    }
}