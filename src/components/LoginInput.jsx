import React, { Component } from "react";
import PropTypes from 'prop-types';

class LoginInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChange(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onPasswordChange(e) {
    this.setState(() => {
      return {
        password: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <label>Email : </label> <br />
            <input
              type="email"
              htmlFor="email"
              value={this.state.email}
              onChange={this.onEmailChange}
              placeholder="Enter your Email"
            />
            <br />
            <label>Password: </label> <br />
            <input
              type="password"
              htmlFor="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              placeholder="Enter your Password"
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
      </div>
    );
  }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
  };

export default LoginInput;
