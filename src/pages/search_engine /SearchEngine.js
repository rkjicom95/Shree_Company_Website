import React from "react";
import "./SearchEngine.css";
import Layout from "../../components/layout/Layout";
import System from "../../assets/system.webp";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { FaRegFileCode } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import Team from "../../assets/team.webp";
const SearchEngine = () => {
  return (
    <>
      <Layout>
        <div className="paid-marketing">
          <div className="paid-marketing-one">
            <h2>Search Engine Optimization</h2>
            <h1>
              Elevate Your Search Rankings and <br /> Online Presence
            </h1>
            <p>
              Unlock your website's potential with our premium SEO services. We
              focus on elevating your search engine rankings, driving organic
              traffic, and enhancing your online visibility for sustained
              success.
            </p>
            <Link to="/contact">
              {" "}
              <button>CONTACT US</button>
            </Link>
          </div>
          <div>
            <img src={System} alt="" />
          </div>
        </div>
        <div>
          <div className="paid-marketing-section">
            <div className="paid-marketing-sec-one">
              <h1>Our Approach</h1>
              <p>
                We offer comprehensive SEO services tailored to your business
                needs. Our experts use advanced techniques to optimize your
                website and improve its search engine performance.
              </p>
              <p>
                We conduct thorough keyword research, on-page and off-page
                optimization, and continuous performance monitoring. We aim to
                help your website attract more organic traffic and achieve
                higher rankings on search engines. Enhance your digital presence
                and reach your target audience effectively.
              </p>
              <hr className="home-hr" />

              <div className="paid-marketing-data">
                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Content Quality</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>User Experience (UX)</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Local SEO</h4>
                  </div>
                </div>

                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Voice Search Optimization</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Schema Markup</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Link Building</h4>
                  </div>
                </div>
              </div>

              <hr className="home-hr" />
            </div>
            <div className="paid-marketing-right">
              <h1>Features</h1>
              <div className="paid-marketing-one">
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Keyword Research</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>On-Page Optimization</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Off-Page Optimization</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Technical SEO</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>
                    Performance Tracking and Analytics
                  </h4>
                </div>
              </div>
              <button
                className="paid-marketing-call"
                onClick={() => (window.location.href = "tel:+918077044335")}
              >
                CALL US
              </button>
            </div>
          </div>
          <div className="home-works">
            <div className="home-works-top">
              <h2>HOW IT WORKS</h2>
              <h1>
                Achieve Amazing Results in Just <br />4 Easy Steps with Ajavu{" "}
                <span>Tech House</span>.
              </h1>
            </div>
            <div className="home-works-data">
              <div className="home-works-div">
                <GoGift className="home-works-icon" />
                <h1>Consultation</h1>
                <h3>
                  Schedule a meeting to <br /> discuss your project's goals and
                  requirements.
                </h3>
              </div>
              <hr className="home-works-hr" />
              <div className="home-works-div">
                <TiDocumentText className="home-works-icon" />
                <h1>Planning</h1>
                <h3>
                  Develop a tailored strategy <br />
                  and detailed roadmap for your project.
                </h3>
              </div>
              <hr className="home-works-hr" />

              <div className="home-works-div">
                <FaRegFileCode className="home-works-icon" />
                <h1>Execution</h1>
                <h3>
                  Implement the plan with our <br />
                  expert team, ensuring quality and efficiency.
                </h3>
              </div>
              <hr className="home-works-hr" />

              <div className="home-works-div">
                <CiDeliveryTruck className="home-works-icon" />
                <h1>Delivery & Support</h1>
                <h3>
                  Launch your project and <br /> provide ongoing support to
                  ensure success.
                </h3>
              </div>
            </div>
            <Link to="/contact">
              <button className="home-works-button">CONTACT US</button>
            </Link>
          </div>
          <div className="home-needs">
            <img src={Team} alt="" />
            <div className="home-need">
              <h1>
                Ready to Boost Your ROI? Let's Launch Your Paid Marketing
                Campaign!
              </h1>
              <p>
                Maximize your marketing impact with expert Paid marketing
                services. Our team is ready to create and optimize campaigns
                that deliver impressive ROI. Contact us today to start driving
                real, measurable results for your business.
              </p>
              <Link to="/contact">
                <button>CONTACT US</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchEngine;
