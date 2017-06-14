import React, {Component} from 'react'
import Comment from './Comment';

export default class CommentList extends Component{

      constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render(){
        const {comments = []} = this.props;
        const {isOpen} = this.state;

        const commentElements = comments.map((comment,index) =>

                                <li data = {index} key = {comment.id}>
                                      <Comment comment = {comment} />
                                </li>);
        return(
            <ul>
                {this.showComments(commentElements)}
            </ul>
        );
    }

     showComments(commentElements){

        return(
            <div>
                {commentElements.length > 0 && 
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'show comments' : 'hide comments'}
                </button>
                }
                {this.state.isOpen ? commentElements : null}
            </div>
        );
    }

    toggleOpen = (ev) =>{
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}