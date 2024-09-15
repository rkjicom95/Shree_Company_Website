import React from "react";
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
import { GoGift } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { FaRegFileCode } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";

const services = [
  {
    id: 1,
    icon: Marketing,
    title: "Paid Marketing",
    description:
      "Elevate your brand's online visibility with customized performance marketing tactics designed to attract, engage, and convert your ideal customers.",
  },
  {
    id: 2,
    icon: Software,
    title: "Software Development",
    description:
      "Creating custom software solutions that streamline your operations, and support your business growth.",
  },
  {
    id: 3,
    icon: Web,
    title: "Website Designing",
    description:
      "Crafting stunning, user-friendly websites that reflect your brand's identity, engage visitors, and drive online success.",
  },
  {
    id: 4,
    icon: Content,
    title: "Search Engine Optimization",
    description:
      "Optimizing your website to rank higher in search engines, attracting more organic traffic, and increasing your visibility to potential customers.",
  },
  {
    id: 5,
    icon: Social,
    title: "Social Media Marketing",
    description:
      "Engaging your audience on social media with creative content and strategic campaigns that build brand loyalty and drive conversions",
  },
  {
    id: 6,
    icon: App,
    title: "App Development",
    description:
      "Developing intuitive, high-performing mobile apps that enhance user experiences and keep your customers connected to your brand, anywhere, anytime.",
  },
];

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-welcome">
          <h2>WELCOME TO AJAVU</h2>
          <h1>
            Growth Through Innovation <br /> Where Creativity Meets Strategy.
          </h1>
          <div>
            <button className="home-welcome-button-one">GET STARTED</button>
            <Link to="/about">
              <button className="home-welcome-button-two">LEARN MORE</button>
            </Link>{" "}
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
                <img src={service.icon} alt="" className="home-offer-icon" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button>LEARN MORE</button>
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
          <button className="home-works-button">CONTACT US</button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
