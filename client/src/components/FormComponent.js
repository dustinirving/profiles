import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class FormComponent extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Form onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder={this.props.usernamePlaceHolder}
              value={this.props.username}
              onChange={this.props.handleInputChange}
            />
            <Label className="mt-3">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder={this.props.passwordPlaceHolder}
              value={this.props.password}
              onChange={this.props.handleInputChange}
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
