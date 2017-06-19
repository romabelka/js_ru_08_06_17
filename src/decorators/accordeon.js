import React, {Component as ReactComponent} from 'react'

export default (AccordionComponent) => class ReadyAccComponent extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        return (
            <AccordionComponent 
                {...this.props} 
                {...this.state} 
                toggleOpenArticle = {this.toggleOpenArticle} 
            />
        )
    }

    toggleOpenArticle = openItemId => ev => {
        this.setState({ 
            openItemId: (openItemId !== this.state.openItemId ? openItemId : null) 
        })
    }
}