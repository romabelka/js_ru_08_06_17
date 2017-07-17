import React from 'react'
import PropTypes from 'prop-types'
import LocalizedText from './LocalizedText'

function Loader(props) {
    return (
        <div>
            <h2><LocalizedText>Loading</LocalizedText>...</h2>
        </div>
    )
}

Loader.propTypes = {
}

export default Loader