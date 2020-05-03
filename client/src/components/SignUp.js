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
    await this.apiCall();
    this.setState({
      username: "",
      password: "",
    });
  };

  apiCall = async () => {
    const response = await axios.post("/api/people", this.state);
    console.log(response.data);
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
