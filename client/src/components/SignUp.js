import React from "react";
import { Card } from "reactstrap";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";
import Redirect from "./Redirect";

export default function SignUp(props) {
  return (
    <div className="row pt-5">
      <div className="col-4"></div>
      <Card body outline color="secondary" className="col-4 align-center mt-5">
        <HeaderComponent title="Sign Up" />
        <FormComponent
          type="Sign Up"
          usernamePlaceHolder="Enter a username"
          passwordPlaceHolder="Enter a password"
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
