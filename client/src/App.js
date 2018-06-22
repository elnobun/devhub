import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
