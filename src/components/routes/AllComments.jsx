import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllComments} from '../../AC'
import Loader from '../Loader'
import Comment from '../Comment'

class AllComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0
		}
	}

 	componentDidMount() {
        const {comments, loadAllComments} = this.props;
        const {offset} = this.state;


		let commentsObj = comments.getIn(['offsets', offset]) || {};

        if (!commentsObj || !commentsObj.loaded && !commentsObj.loading) 
        	loadAllComments(offset)
    }

    moveOffset = direction => () => {
		let offset = this.state.offset + (direction ? -1 : 1);
    	this.setState({offset});
    	this.props.loadAllComments(offset);
    }

    render() {
    	const 
    		{ comments } = this.props,
    		{ offset } = this.state;

		let commentsObj = comments.getIn(['offsets', offset]) || {};
		
		if (!commentsObj.loaded) {
    		return <Loader/>;
		}

	    return (
	        <div>
	            <h1>All Comments:</h1>
	            <ul>
	                {
	                	commentsObj.comments.map(id => 
		                	<li key={id}>
		                		<Comment id = {id}/>
		                	</li>
		                )
	                }
	            </ul>
	            <button onClick={this.moveOffset(true)} disabled={offset === 0}>Move Backwards</button>
	            <button onClick={this.moveOffset(false)} disabled={offset === comments.getIn(['offsets', 'total']) - 1}>Move Forward</button>
	        </div>
	    )
	}
}

export default connect(state => ({
	comments: state.comments
}), {loadAllComments})(AllComments)