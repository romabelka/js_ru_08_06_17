import React, { PropTypes } from 'react'

function LocalizedText(props, context) {
    if (typeof props.children !== 'string') {
        console.warn('string child expected')
        return <span>{props.children}</span>
    }
    return <span>{context.dictionary[props.children] || props.children}</span>
}

LocalizedText.propTypes = {
    children: PropTypes.string
}

LocalizedText.contextTypes = {
    dictionary: PropTypes.object.isRequired
}

export default LocalizedText