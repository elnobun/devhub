import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Dashboard from "./components/auth/Dashboard/Dashboard";
import CreateProfile from "./components/auth/CreateProfile/CreateProfile";
import PrivateRoute from "./components/common/PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
