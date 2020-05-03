import React from "react";
import { Card } from "reactstrap";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";
import Redirect from "./Redirect";

export default function Login(props) {
  return (
    <div className="row pt-5">
      <div className="col-4"></div>
      <Card body outline color="secondary" className="col-4 align-center mt-5">
        <HeaderComponent title="Login" />
        <FormComponent
          type="Login"
          usernamePlaceHolder="Enter your username"
          passwordPlaceHolder="Enter your password"
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
