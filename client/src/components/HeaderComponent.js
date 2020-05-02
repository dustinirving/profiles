import React from "react";
import "reactstrap";

export default function HeaderComponent(props) {
  return (
    <div>
      <h2 className="text-center">{props.title}</h2>
    </div>
  );
}
