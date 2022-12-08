import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";
import { login } from "../utils/auth";
  
const LoginPage = ({loginSuccess}) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <div>
      <div>
        <div className="login-form">
          <h1>Login</h1>
            <LoginInput login={onLogin} />
          <p>
            Don't have an account ?{" "}
            <Link to="/register">
              <u>Create here</u>
            </Link>
          </p>
          <Link to="/">
            <p>
              <u>Cancel</u>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;
