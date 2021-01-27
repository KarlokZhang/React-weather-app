import React from "react";

function Temperature({ degree, className }) {
  return (
    <span className={className}>
      {degree}
      <span>
        &nbsp;
        <span>&#8451;</span>
      </span>
    </span>
  );
}

export default Temperature;
