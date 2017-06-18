import React from 'react'

export default (OriginalComponent) => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = { currentlyOpenComponentId: null }
        }

        /**
         * If event target component open, closes all components
         * If event target component closed, opens it and closes all other components
         */
        toggleOpen = componentId => ev => {
            
            if (componentId === this.state.currentlyOpenComponentId) {
                this.setState({ currentlyOpenComponentId: null })
            } else {
                this.setState({ currentlyOpenComponentId: componentId })
            }        
        }

        render() {
            const {id} = this.props
            
            return (
                <OriginalComponent 
                    {...this.props}
                    currentlyOpenComponentId = {this.state.currentlyOpenComponentId}
                    toggleOpen = {this.toggleOpen}
                />
            )
        }
    }
}
