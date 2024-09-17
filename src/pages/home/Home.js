import React, { useState } from "react";
import "./Home.css";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import WeOne from "../../assets/weone.webp";
import HomeTwo from "../../assets/hometwo.avif";
// import { SiCoinmarketcap } from "react-icons/si";
import Marketing from "../../assets/marketing.png";
import Content from "../../assets/Content.png";
import Web from "../../assets/Web.png";
import Social from "../../assets/social-media.png";
import App from "../../assets/app.png";
import Software from "../../assets/software.png";
import Team from "../../assets/team.webp";
import { GoGift } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { FaRegFileCode } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
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

const Home = () => {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Layout>
        <div className="home-welcome">
          <h2>WELCOME TO AJAVU</h2>
          <h1>
            Growth Through Innovation <br /> Where Creativity Meets Strategy.
          </h1>
          <div>
            <button className="home-welcome-button-one" onClick={togglePopup}>
              GET STARTED
            </button>
            {isPopupOpen && (
              <div className="popup-overlay">
                <div className="popup-form">
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
                      className="popup-textarea"
                    />
                    <div className="popup-buttons">
                      <button type="submit">Submit</button>
                      <button className="close-popup" onClick={togglePopup}>
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <Link to="/about">
              <button className="home-welcome-button-two">LEARN MORE</button>
            </Link>
          </div>
          <div className="home-welcome-text">
            <h1>
              Join over 30+ businesses in transforming <br /> your digital
              journey
            </h1>
          </div>
        </div>
        <div className="home-who-we-are">
          <img src={WeOne} alt="" />
          <div className="home-who-we-are-div">
            <h2>WHO WE ARE</h2>
            <h1>Experience the Future Building Bridges in the Digital World</h1>
            <p>
              At Ajavu Tech House, we're not just a tech company, we're your
              digital architects. We see your vision and translate it into a
              powerful online presence that drives results.
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
        <div className="home-over-vision">
          {/* <div> */}
          <img src={HomeTwo} alt="" />
          {/* </div> */}
          <div className="home-over-vision-div">
            <div>
              <h2>OUR VISION</h2>
              <h1>Building a Digital India, Together</h1>
              <p>
                We empower numerous enterprises to achieve their full potential
                and thrive in the digital era helping enhance efficiency and
                contributing to growth and technological advancement.
              </p>
            </div>
            <div>
              <h2>OUR MISSION</h2>
              <h1>Delivering Innovation. Driving Growth</h1>
              <p>
                Your vision is our mission. To deliver exceptional digital
                experiences through innovative strategies and cutting-edge
                solutions, propelling our clients towards success.
              </p>
            </div>
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
                Launch your project and <br /> provide ongoing support to ensure
                success.
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
              Innovative solutions, exceptional quality, tailored to your needs
            </h1>
            <p>
              Providing cutting-edge solutions and unmatched quality, customized
              to perfectly align with your specific business requirements and
              goals
            </p>
            <Link to="/contact">
              <button>CONTACT US</button>
            </Link>
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
                for expert assistance and unparalleled <br /> service, available{" "}
                around the <br />
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
      </Layout>
    </>
  );
};

export default Home;
