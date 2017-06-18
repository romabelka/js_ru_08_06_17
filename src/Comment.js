import React from 'react'

export default function CommentList({comment}) {
    return (
        <span><b>{comment.user}:</b> {comment.text}</span>
    )
}