import React, { Component } from 'react'
import Comment from './Comment'

export default function Comments({ data }) {
	const commentElements = data && data.map(comment => 
    	<li key = {comment.id}>
    		<Comment comment={comment}/>
    	</li>
    )
    const isComments = data && data.length;
    //const commentsCount = {data.length}
    return (
    	<section>
	        <ul>
	        	{ isComments ? commentElements : 'no comments' }
	            
	        </ul>
    	</section>
    )
}