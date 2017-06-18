import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false,
        openId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} toggleOpenArticle = {this.toggleOpenArticle} ref = {this.getRef}/>
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleOpenArticle = openId => ev => {
        if (this.state.openId === openId) {
            openId = null;
        }

        this.setState({ openId })
    };

    getRef = (ref) => {
        console.log('---', ref)
    }
}