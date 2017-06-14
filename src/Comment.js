import React, {Component} from 'react'

export default class Comment extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			isOpen: true,
		}
	}

	render(){
		const {comment} = this.props
		return(
			<div>
				<div>{comment.user}</div>
				<div>{comment.text}</div>
			</div>
		)
	}
}
