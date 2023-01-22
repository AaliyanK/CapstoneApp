import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-image">
        <div className="bg-container">
          <h1>Welcome to Zena</h1>
          <h2>Automation for your biotechnology needs</h2>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
