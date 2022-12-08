import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import { register } from "../utils/auth";

const RegisterPage = () => {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/login");
    }
  }
  return (
    <div>
      <div className="login-form">
        <h1>Register</h1>
        <RegisterInput register={onRegisterHandler} />
        <p>
          Already have an account ? 
          <Link to="/login">
            <u>Login here</u>
          </Link>
        </p>
        <Link to="/">
          <p>
            <u>Cancel</u>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
