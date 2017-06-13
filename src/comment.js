import React from "react";

export default function Comment(props) {
	
	return (<div>
			<h4>{props.user}</h4>
			<div>{props.text}</div>
		</div>);

}