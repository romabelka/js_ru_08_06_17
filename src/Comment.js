import React from 'react';

export default function Comment(props) {
    return (
        <div>
            <h6>{props.comment.user}</h6>
            <section>{props.comment.text}</section>
        </div>
    )
}