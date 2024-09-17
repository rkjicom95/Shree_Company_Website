import React from "react";
import "./WebsiteDesigning.css";
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

const WebsiteDesigning = () => {
  return (
    <>
      <Layout>
        <div className="paid-marketing">
          <div className="paid-marketing-one">
            <h2>WEBSITE DEVELOPMENT</h2>
            <h1>
              Website Development Services to <br /> Elevate Your Online
              Presence
            </h1>
            <p>
              We craft visually stunning and highly functional websites tailored
              to your business needs. Transform your digital landscape with our
              expert website designing services.
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
                At Ajavu Tech House, we believe that a website is more than just
                an online presence it's a digital representation of your brand.
                Elevate your online presence with our top-tier, high-quality
                website designing services.
              </p>
              <p>
                We understand that your website is often the first impression
                potential clients have of your business. That's why we
                prioritize quality, creativity, and usability in every project.
                Our team of skilled designers and developers work
                collaboratively to ensure that your website not only looks
                impressive but also performs seamlessly across all devices.
              </p>
              <hr className="home-hr" />

              <div className="paid-marketing-data">
                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Brand Consistency</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Clear Call-to-Action (CTA)</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Content Management System (CMS)</h4>
                  </div>
                </div>

                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Analytics Integration</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Mobile Optimization</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Scalability</h4>
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
                  <h4 style={{ color: "#fff" }}>Custom Design</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Responsive Design</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>User Experience</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>SEO Optimization</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Fast Load Times</h4>
                </div>
                <div className="paid-marketing-left-icon">
                  <IoLocationOutline className="paid-marketing-left" />
                  <h4 style={{ color: "#fff" }}>Ongoing Support</h4>
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

export default WebsiteDesigning;
