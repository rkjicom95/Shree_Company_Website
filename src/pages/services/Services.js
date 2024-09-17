import React from "react";
import "./Services.css";
import Layout from "../../components/layout/Layout";
import { FaCheck } from "react-icons/fa6";
import ServiceImg from "../../assets/serviceImg.png";
import Marketing from "../../assets/marketing.png";
import Content from "../../assets/Content.png";
import Web from "../../assets/Web.png";
import Social from "../../assets/social-media.png";
import App from "../../assets/app.png";
import Software from "../../assets/software.png";
import System from "../../assets/system.webp";
import MobileP from "../../assets/mobilephone.png";
import { IoCallOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: Marketing,
    title: "Paid Marketing",
    description:
      "Elevate your brand's online visibility with customized performance marketing tactics designed to attract, engage, and convert your ideal customers.",
    link: "/paidMarketing",
  },
  {
    id: 2,
    icon: Software,
    title: "Software Development",
    description:
      "Creating custom software solutions that streamline your operations, and support your business growth.",
    link: "/softwareDevelopment", // Add a link if required
  },
  {
    id: 3,
    icon: Web,
    title: "Website Designing",
    description:
      "Crafting stunning, user-friendly websites that reflect your brand's identity, engage visitors, and drive online success.",
    link: "/websiteDesigning",
  },
  {
    id: 4,
    icon: Content,
    title: "Search Engine Optimization",
    description:
      "Optimizing your website to rank higher in search engines, attracting more organic traffic, and increasing your visibility to potential customers.",
    link: "/searchEngine",
  },
  {
    id: 5,
    icon: Social,
    title: "Social Media Marketing",
    description:
      "Engaging your audience on social media with creative content and strategic campaigns that build brand loyalty and drive conversions.",
    link: "/socialMedia",
  },
  {
    id: 6,
    icon: App,
    title: "App Development",
    description:
      "Developing intuitive, high-performing mobile apps that enhance user experiences and keep your customers connected to your brand, anywhere, anytime.",
    link: "/appDevelopment",
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className="services-container">
          <div className="services">
            <h1>Services</h1>
            <h4>Solutions for every digital need.</h4>
          </div>
          <div className="paid-marketing-section">
            <div className="paid-marketing-sec-one">
              <h1>
                Pioneering Digital Excellence: Discover <br /> the AJAVU
                Advantage.
              </h1>
              <p>
                Our dedication to quality ensures every project meets the
                highest standards. <br /> Experience unparalleled precision and{" "}
                excellence with SHREE.
              </p>
              <hr className="home-hr" />

              <div className="paid-marketing-data">
                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Personalized Marketing</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4> Cross-Channel Integration</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>A/B Testing</h4>
                  </div>
                </div>

                <div className="paid-marketing-one">
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Customer Retention Strategies</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Real-Time Analytics</h4>
                  </div>
                  <div className="paid-marketing-left-icon">
                    <FaCheck className="paid-marketing-left" />
                    <h4>Audience Segmentation</h4>
                  </div>
                </div>
              </div>

              <hr className="home-hr" />
            </div>
            <div className="service-img">
              <img src={ServiceImg} alt="" />
            </div>
          </div>
          <div className="home-offer">
            <div className="home-offer-top">
              <h2>WHAT WE OFFER</h2>
              <h1>
                Where Strategy Meets Technology. <br />
                Your Success Story Begins With
                <span> Ajavu Tech</span>.
              </h1>
            </div>

            <div className="home-offer-div">
              {services.map((service) => (
                <div key={service.id}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="home-offer-icon"
                  />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button onClick={() => navigate(service.link)}>
                    LEARN MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="home-data-all">
            <h1>
              Exploring Digital Excellence with <br /> Ajavu Tech House
            </h1>

            <div className="home-data-three">
              <div className="home-data-two">
                <div className="home-data-system">
                  <div>
                    <h1>Timely and Transparent Communication</h1>
                    <h4>
                      Ensuring reliable and transparent <br /> communication
                      throughout your project
                    </h4>
                  </div>
                  <div>
                    <img src={System} alt="" />
                  </div>
                </div>
                <div className="home-data-system">
                  <div>
                    <h1>Responsive and Scalable Solutions</h1>
                    <h4>
                      Delivering responsive and scalable <br /> solutions that
                      grow with your <br /> business and adapt to your needs
                    </h4>
                  </div>
                  <div>
                    <img src={MobileP} alt="" />
                  </div>
                </div>
              </div>
              <div className="home-data-mobile">
                <IoCallOutline className="home-data-icon" />
                <h1>Premium Support</h1>
                <h2>
                  Reach us at +91 8077044335 <br />
                  for expert assistance and unparalleled <br /> service,
                  available around the <br />
                  clock.
                </h2>
                <button
                  onClick={() => (window.location.href = "tel:+918077044335")}
                >
                  CALL NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Services;
