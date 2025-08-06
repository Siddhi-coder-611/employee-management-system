import React from "react";
import "./About.css";
import team from '../assets/team.jpg';
const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-text">
          <h1>Who We Are</h1>
          <p>
            Empowering businesses with intelligent, scalable, and user-friendly solutions.
          </p>
        </div>
        <div className="hero-img">
          <img src={team} alt="About Us" />
        </div>
      </section>

      <section className="about-info">
        <div className="info-card">
          <h2>Our Vision</h2>
          <p>
            To revolutionize industries by developing smart systems that improve people's lives through innovation and excellence.
          </p>
        </div>

        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            We aim to deliver quality software solutions that are simple, scalable, and impactful — backed by a passionate team and modern technology.
          </p>
        </div>
      </section>

      <section className="about-extra">
        <div className="extra-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔️ Modern Tech Stack</li>
            <li>✔️ Transparent Communication</li>
            <li>✔️ On-Time Delivery</li>
            <li>✔️ Scalable & Secure Solutions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;


/*function About() {
  return (
    <div>
      <h2>About This Project</h2>
      <p>This system is built using React for frontend and Spring Boot for backend.</p>
    </div>
  );
}

export default About;*/
