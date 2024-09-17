import React from "react";
import "./Contacts.css";
import Layout from "../../components/layout/Layout";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Contacts = () => {
  return (
    <>
      <Layout>
        <div className="services-container">
          <div className="services">
            <h1>Contact Us</h1>
            <h4>
              Start the conversation to establish a good relationship and
              business.
            </h4>
          </div>

          <div className="contact-marge">
            <div className="contact-container">
              <h2>WHAT WE OFFER</h2>
              <h1>Seamless Communication, Global Impact.</h1>
              <p>
                Providing cutting-edge solutions and unmatched quality,
                customized to perfectly align with your specific business
                requirements and goals.
              </p>
              <hr className="contact-hr" />
              <div className="contact-all-data">
                <div className="contact-data">
                  <div className="contact-data-left">
                    <IoLocationOutline className="contact-icon" />

                    <div>
                      <h2>Head Office</h2>
                      <p>
                        Jayanagar, Bengaluru, <br /> Karnataka 560041
                      </p>
                    </div>
                  </div>
                  <div className="contact-data-left">
                    <IoCallOutline className="contact-icon" />

                    <div>
                      <h2>LET'S TALK</h2>
                      <p>Phone: +91 8077044335</p>
                    </div>
                  </div>
                </div>
                <div className="contact-data">
                  <div className="contact-data-left">
                    <CiMail className="contact-icon" />

                    <div>
                      <h2>Email Support</h2>
                      <p>rkjicom95@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-data-left">
                    <IoMdTime className="contact-icon" />

                    <div>
                      <h2>WORKING HOURS</h2>
                      <p>
                        Monday - Friday <br /> 09.30 AM - 06.30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h1>Send us a message</h1>
              <h2>
                Please feel free to send us any questions, feedback or
                suggestions you might have.
              </h2>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id="phone" name="phone" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" required />

                <label htmlFor="message">Message:</label>
                <textarea
                  type="textarea"
                  id="message"
                  name="message"
                  required
                  className="contact-textarea"
                />
                <button type="submit" className="contact-buttons">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contacts;
