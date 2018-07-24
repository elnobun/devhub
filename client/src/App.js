import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    );
  }
}

export default App;
