import React from "react";
import MenuBar from "../Components/navigations/MenuBar";
import Footer from "../Components/navigations/Footer";

import "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MenuBar />

      <main className="main-content">{props.children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
