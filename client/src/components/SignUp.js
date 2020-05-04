import React from "react";
import { Card } from "reactstrap";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";
import Redirect from "./Redirect";
import axios from "axios";

export default class SignUp extends React.Component {
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
    const data = await this.getApiCall();
    const input = this.state;
    this.validation(data, input);

    this.setState({
      username: "",
      password: "",
    });
  };

  getApiCall = async () => {
    const response = await axios.get("/api/people");
    console.log(response.data);
    return response.data;
  };
  postApiCall = async () => {
    const response = await axios.post("/api/people", this.state);
    console.log(response.data);
  };

  validation = (data, input) => {
    let valid = true;
    data.forEach((item) => {
      if (item.username === input.username) {
        valid = false;
      }
    });
    if (valid) {
      if (input.username.length < 6) {
        alert("Your username must be at least 6 characters.");
      } else if (input.password.length < 6) {
        alert("Your password must be at least 6 characters.");
      } else {
        this.postApiCall();
        alert("You have successfully created an account.");
      }
    } else {
      alert("The username already exists.");
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
          <HeaderComponent title="Sign Up" />
          <FormComponent
            type="Sign Up"
            usernamePlaceHolder="Enter a username"
            passwordPlaceHolder="Enter a password"
            username={this.state.username}
            password={this.state.password}
            apiCall={this.apiCall}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
          <Redirect
            url="/"
            link="Login"
            redirectMessage="Already have an account?"
          />
        </Card>
        <div className="col-4"></div>
      </div>
    );
  }
}
