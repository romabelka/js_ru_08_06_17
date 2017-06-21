import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {

  static propTypes = {};

  state = {
    userName: "",
    comment: ""
  };

  render() {
    const errorStyle = this.state.isError ? {background: 'red'} : {background: 'none'};

    return (
      <form>
        <label>Your comment</label><br/><br/>
        Name: <input name="userName" type='text' value={this.state.userName}
                     onChange={this.handleInputChange(5, 15)}/><br/><br/>
        Comment: <textarea name="comment" type='text' value={this.state.comment}
                           onChange={this.handleInputChange(20, 50)}/><br/><br/>
        <input name="submitButton" type="button" value="Add comment"/>
      </form>
    )
  }

  handleInputChange = (minlength, maxlength) => (ev) => {
    let symbolLength = ev.target.value.length;
    const inputName = ev.target.name;
    const currentInput = ev.target;

    if (symbolLength < minlength || symbolLength > maxlength) {
      currentInput.style.background = "red";
    } else {
      currentInput.style.background = "none";
    }

    this.setState({
      [inputName]: ev.target.value,
    });
  }
}

export default UserForm