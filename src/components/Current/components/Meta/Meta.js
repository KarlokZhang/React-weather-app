import React from "react";
import "./Meta.css";

const Meta = ({ title, value }) => (
  <div className="meta">
    <span className="title">{title}</span>
    <br></br>
    <span className="value">{value}</span>
  </div>
);

export default Meta;
