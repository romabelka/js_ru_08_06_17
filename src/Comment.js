import React from 'react'

export default (props) => (
	<li>
		<h3>{props.comment.user}</h3>
		<p>{props.comment.text}</p>
	</li>
)