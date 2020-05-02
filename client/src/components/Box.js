import React from "react";
import { Card, Button, Label, Input, Form } from "reactstrap";
import axios from "axios";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }
  async getRequest() {
    const response = await axios.get("/api/people");
    console.log(response.data);
  }

  async postRequest() {
    const response = await axios.post("/api/people", this.state);
    console.log(response.data);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.postRequest();
    this.getRequest();
    event.value = "";
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
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
          <h2 className="text-center">Sign Up</h2>

          <Form>
            <Label>Username</Label>
            <Input
              placeholder="Enter your username"
              name="username"
              onChange={this.handleInputChange}
              value={this.username}
            />

            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              name="password"
              onChange={this.handleInputChange}
              value={this.password}
            />
          </Form>

          <Button onClick={this.handleSubmit} className="mt-3">
            Sign Up
          </Button>
        </Card>
        <div className="col-4"></div>
      </div>
    );
  }
}

export default Box;
