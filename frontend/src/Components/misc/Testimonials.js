import React from "react";
import user1 from "../../images/adrian.jfif";
import user2 from "../../images/irfan.jpg";
import user3 from "../../images/aaliyan.jfif";
import "./Testimonials.css";

const Home = () => {
  return (
    <React.Fragment>
      <section className="content-container">
        <div className="textArea">
          <h2>Who Are We?</h2>
          <p>Meet the team!</p>
        </div>
        <div className="cust-container">
          <img src={user1} alt="Avatar" style={{ width: "90px" }} />
          <p>
            <span>Adrian Foell</span> Technical Lead
          </p>
          <p>
            As the technical lead, I aim to develop the hardware required to
            perform the automation within the bioreactor. Additionally, I'll be
            conducting bioreactor experiments to ensure the quality of our
            metrics.
          </p>
        </div>

        <div className="cust-container">
          <img src={user2} alt="Avatar" style={{ width: "90px" }} />
          <p>
            <span>Irfan Khan</span> Business Development Lead
          </p>
          <p>
            I will be overseeing crucial business initiatives including customer
            interviews, competitor, and cost analysis to gain an edge on the
            competition in this industry!
          </p>
        </div>
        <div className="cust-container">
          <img src={user3} alt="Avatar" style={{ width: "90px" }} />
          <p>
            <span>Aaliyan Kapadia</span> Software Development Lead
          </p>
          <p>
            With extensive full-stack development skills, I aim to create a
            user-interface that interacts with the hardware to automate
            biotechnology processes!
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
