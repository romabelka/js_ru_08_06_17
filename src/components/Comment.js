import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = PropTypes.shape({
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    }).isRequired
})

Comment.defaultProps = {
    comment: {
        user: 'Guest'
    }
}

export default Comment