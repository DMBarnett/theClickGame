import React from "react";
import "./style.css";

function Click(props) {
  return (
    <div
      role="img"
      style={{ backgroundImage: `url("${props.image.image}")` }}
      onClick={() => props.clik(props.image.id)}
      className="clickItem"
    />
  );
}

export default Click;
