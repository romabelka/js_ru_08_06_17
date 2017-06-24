import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./inputStyle.css"

class UserForm extends Component {

  static propTypes = {};

  state = {
    userName: "",
    comment: ""
  };

  render() {

    return (
      <form>
        <label>Your comment</label><br/><br/>
        Name: <input className={this.changeClassError('userName')} name="userName" type='text' value={this.state.userName}
                     onChange={this.handleInputChange}/><br/><br/>
        Comment: <textarea className={this.changeClassError('comment')} name="comment" type='text' value={this.state.comment}
                           onChange={this.handleInputChange}/><br/><br/>
        <input name="submitButton" type="button" value="Add comment"/>
      </form>
    )
  }


  handleInputChange = (ev) => {
    const inputName = ev.target.name;

    this.setState({
      [inputName]: ev.target.value,
    });
  }

  changeClassError = (name) => {
    const inputLength = this.state[name].length;

    if (name === "userName") {
      return inputLength < varifNumbers[name].min || inputLength > varifNumbers[name].max ? "form-input__error" : "form-input_success"
    } else {
      return inputLength < varifNumbers[name].min || inputLength > varifNumbers[name].max ? "form-input__error" : "form-input_success"
    }
  }
}

const varifNumbers = {
  userName: {
    min: 5,
    max: 12,
  },
  comment: {
    min: 20,
    max: 50,
  }
}

export default UserForm