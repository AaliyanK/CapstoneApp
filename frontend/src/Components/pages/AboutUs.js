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
            A shift towards a circular economy has created a need to produce
            biological products with low profit margins. To combat high capital
            costs required for typical bioprocesses, highly accurate monitoring
            systems are often substituted with inadequate and labour-intensive
            procedurals. The goal of our capstone project is to develop an
            accurate biomass monitoring system applicable for a bioprocess at a
            fraction of the cost currently available. This will include the
            development of a plug and play monitor combined with a user
            interface for seamless integration.
          </p>
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
