import React, { useState } from "react";
import "./Otp.css";
import { Link } from "react-router-dom";

const Otp = () => {
  const [showOtpField, setShowOtpField] = useState(false);

  // Function to handle Get OTP click
  const handleGetOtp = () => {
    // Logic to generate and send OTP (can be implemented later)
    setShowOtpField(true);
  };

  return (
    <div className="otp-container">
      <div className="otp-form">
        <h1>OTP Form</h1>

        <form>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
            <button type="button" className="otp-button" onClick={handleGetOtp}>
              Get OTP
            </button>
          </div>

          {showOtpField && (
            <div className="otp-field">
              <label htmlFor="otp">OTP:</label>
              <input
                type="tel"
                id="otp"
                name="otp"
                required
                placeholder="Enter a 4-digit number"
                maxLength={4}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allows only numbers
                }}
              />
            </div>
          )}

          <Link to="/resetPassword">
            {" "}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </Link>

          <div className="back-link">
            <p>
              Go Back <Link to="/login">Back</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
