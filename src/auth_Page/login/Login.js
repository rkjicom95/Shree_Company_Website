import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="register">
        {" "}
        <div className="register-form">
          <h1>Login Form</h1>

          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
            />

            <button type="submit" className="register-buttons">
              Login
            </button>
            <div className="register-login">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <div className="login-forgot">
              <p>
                Forgot Password Click Here:{" "}
                <Link to="/otp">Forgot Password</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
