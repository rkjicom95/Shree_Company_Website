import React from "react";
import "./About.css";
import Layout from "../../components/layout/Layout";
import WeOne from "../../assets/weone.webp";
import HomeTwo from "../../assets/hometwo.avif";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about">
          <div className="services-container">
            <div className="services">
              <h1>About Us</h1>
              <h4>
                We blend creativity with technology to deliver outstanding
                results to help your business shine in the digital world.
              </h4>
            </div>
          </div>
          <div className="home-welcome-text">
            <h1>
              Join over 30+ businesses in transforming <br /> your digital
              journey
            </h1>
          </div>
          <div className="home-who-we-are">
            <img src={WeOne} alt="" />
            <div className="home-who-we-are-div">
              <h2>WHO WE ARE</h2>
              <h1>
                Experience the Future Building Bridges in the Digital World
              </h1>
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
                  We empower numerous enterprises to achieve their full
                  potential and thrive in the digital era helping enhance
                  efficiency and contributing to growth and technological
                  advancement.
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
        </div>
      </Layout>
    </>
  );
};

export default About;
