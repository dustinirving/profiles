import React from "react";

export default function Redirect(props) {
  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-8 text-center">
          <p>{props.redirectMessage}</p>
        </div>
        <div className="col-4">
          <a href={props.url}>{props.link}</a>
        </div>
      </div>
    </div>
  );
}
