import React from 'react'
import PropTypes from 'prop-types'
import CommentsPagination from '../CommentsPagination'

function CommentsPage({match}) {
    return <CommentsPagination page = {match.params.page}/>
}

CommentsPage.propTypes = {
}

export default CommentsPage