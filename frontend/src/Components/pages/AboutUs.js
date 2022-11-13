import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="content-container">
        <div className="textArea">
          <h2>About Us</h2>
          <h3>Our Mission</h3>
          <p>
            We aim to develop a low cost automation system for biomanufacturing
            that allows for a company to increase the productivity of their
            processes. Large amounts of labour and resources are typically spent
            on manual operations and measurements due to the dynamic nature of
            cellular metabolism
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
