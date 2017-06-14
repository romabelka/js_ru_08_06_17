import React, {Component} from 'react'

export default function Comment({comment}){
        return (
            <div>
                <h3>{comment.user}</h3>
                <section>{comment.text}</section>
            </div>
        );
}