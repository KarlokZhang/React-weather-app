import React from "react";

function VerticalDivider({ color, width, className }) {
  return (
    <div className={className} style={{ width, backgroundColor: color }}></div>
  );
}

export default VerticalDivider;
