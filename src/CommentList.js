import React, {
	Component
} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commentsDisplay: false
		}
	}

	toggleComments = () => {
		this.setState({commentsDisplay: !this.state.commentsDisplay});
	}

	getCommentList(){
		if ( !this.state.commentsDisplay ) {
			return null;
		}

		const {comments} = this.props;
		const commentList = comments.map( comment => <li key={comment.id}> <Comment user={comment.user} text={comment.text}/></li> )

		return (<ul>{commentList}</ul>)
	}

	render() {
		
		const {commentsDisplay} = this.state;

		return ( <div>
					<button onClick={this.toggleComments}> {commentsDisplay ? 'Hide Comments' : 'Show Comments'} </button>
					{this.getCommentList()}
				</div>)
		}
	}