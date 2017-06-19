import React, {Component as ReactComponent} from 'react'

export default (AccordionComponent) => class ReadyAccComponent extends ReactComponent {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    }

    render() {
        //перевод строки после return мешает - в результате ты возвращаяешь undefined
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
