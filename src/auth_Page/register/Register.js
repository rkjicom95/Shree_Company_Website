import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register-form">
          <h1>Registration Form</h1>

          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter a 10-digit phone number"
              maxLength={10} // Enforces max length on input
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allows only numbers
              }}
            />

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
              Register
            </button>
            <div className="register-login">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
