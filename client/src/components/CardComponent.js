import React from "react";
import { Card } from "reactstrap";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";

export default function CardComponent(props) {
  return (
    <div className="row pt-5">
      <div className="col-4"></div>
      <Card body outline color="secondary" className="col-4 align-center mt-5">
        <HeaderComponent title="Sign Up" />
        <FormComponent />
      </Card>
      <div className="col-4"></div>
    </div>
  );
}
