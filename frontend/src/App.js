import "./App.css";
import Prototype from "./Components/pages/Prototype";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Components/pages/Home";
import AboutUs from "./Components/pages/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path={"/AboutUs"} component={AboutUs}></Route>
            <Route path={"/Prototype"} component={Prototype}></Route>
            <Route path={"/"} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
