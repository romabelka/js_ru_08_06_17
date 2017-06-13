import React from 'react'

export default function Comment({comment}) {

    return (
        <div>
            <stong>{comment.user}</stong>
            <div>{comment.text}</div>
        </div>
    )
}