import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="background">
          <Route path="/" exact component={Login} />

          <Route path="/signup" exact component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
