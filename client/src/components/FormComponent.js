import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postRequest();
    this.getRequest();
    this.setState({
      username: "",
      password: "",
    });
  };

  async getRequest() {
    const response = await axios.get("/api/people");
    console.log(response.data);
  }

  async postRequest() {
    const response = await axios.post("/api/people", this.state);
    console.log(response.data);
  }

  render() {
    return (
      <div className="mt-3">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder={this.props.usernamePlaceHolder}
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <Label className="mt-3">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder={this.props.passwordPlaceHolder}
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <div className="row mt-4">
              <div className="col-4"></div>
              <Button className="col-4" type="submit ">
                {this.props.type}
              </Button>
              <div className="col-4"></div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
