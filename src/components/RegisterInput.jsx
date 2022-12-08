import React, { Component } from "react";
import PropTypes from 'prop-types';


class RegisterInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
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

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label>Nama Lengkap : </label> <br />
          <input
            type="text"
            htmlFor="name"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Enter your full name"
          />{" "}
          <br />
          <label>Email : </label> <br />
          <input
            type="email"
            htmlFor="email"
            value={this.state.email}
            onChange={this.onEmailChange}
            placeholder="Enter your Email"
          />{" "}
          <br />
          <label>Password: </label> <br />
          <input
            type="password"
            htmlFor="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
            placeholder="Enter your password"
          />{" "}
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
