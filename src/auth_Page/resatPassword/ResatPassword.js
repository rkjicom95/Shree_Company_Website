import React from "react";
import "./ResatPassword.css";
import { Link } from "react-router-dom";
const ResatPassword = () => {
  return (
    <>
      <div className="register">
        {" "}
        <div className="register-form">
          <h1>Reset Password</h1>

          <form>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="text"
              id="newPassword"
              name="newPassword"
              required
              placeholder="Enter your new password"
            />
            <label htmlFor="newPassword">Confirm Password:</label>
            <input
              type="text"
              id="conPassword"
              name="conPassword"
              required
              placeholder="Enter your confirm password"
            />
            <Link to="/">
              <button type="submit" className="register-buttons">
                Reset Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResatPassword;
