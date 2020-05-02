import React from "react";
import { Label, Input } from "reactstrap";

export default function InputComponent(props) {
  return (
    <div>
      <Label>{props.title}</Label>
      <Input placeholder={props.message} />
    </div>
  );
}
