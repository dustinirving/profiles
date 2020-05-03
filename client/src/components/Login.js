import React from "react";
import { Card } from "reactstrap";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";
import Redirect from "./Redirect";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const input = this.state;
    const data = await this.apiCall();
    this.validation(data, input);
    this.setState({
      username: "",
      password: "",
    });
  };

  apiCall = async () => {
    const response = await axios.get("/api/people");
    console.log(response.data);
    return response.data;
  };

  validation = (data, input) => {
    let valid = false;
    data.forEach((item) => {
      if (
        item.username === input.username &&
        item.password === input.password
      ) {
        valid = true;
      }
    });
    if (valid) {
      alert("You have successfully signed in");
    } else {
      alert("Your password and username don't match");
    }
  };

  render() {
    return (
      <div className="row pt-5">
        <div className="col-4"></div>
        <Card
          body
          outline
          color="secondary"
          className="col-4 align-center mt-5"
        >
          <HeaderComponent title="Login" />
          <FormComponent
            type="Login"
            usernamePlaceHolder="Enter your username"
            passwordPlaceHolder="Enter your password"
            username={this.state.username}
            password={this.state.password}
            apiCall={this.apiCall}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
          <Redirect
            url="/signup"
            link="Sign Up"
            redirectMessage="Don't have an account?"
          />
        </Card>
        <div className="col-4"></div>
      </div>
    );
  }
}
