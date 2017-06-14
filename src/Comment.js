import React, {Component} from 'react'

export default class Comment extends Component{
	constructor(props) {
		super(props);
		
		// this.state = {

		// }
	}

	render(){
		const {comment} = this.props
		return(
			<div>{comment.user}</div>
		)
	}
}
