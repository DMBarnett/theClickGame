import React from "react";

function Click(props) {
  return (
    <div
      style={{ backgroundImage: `url("${props.image.image}")` }}
      onClick={() => props.clickEvent(props.id)}
    />
  );
}

export default Click;
