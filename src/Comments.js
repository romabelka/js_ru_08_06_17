import React, { Component } from 'react'
import Comment from './Comment'

export default class Comments extends Component{
	render(
		const {comments} = this.props
		const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment={comment}/></li>)
	    return (
	        <ul>
	            {commentElements}
	        </ul>
	    )
	)
}

// export default function Comments({ data }) {
// 	//console.log(data);
//     const commentElements = data.map(comment => <li key = {comment.id}><Comment comment={comment}/></li>)
//     return (
//         <ul>
//             {commentElements}
//         </ul>
//     )
// }