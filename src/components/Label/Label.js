import React from "react";
import "./Label.css";
const Label = ({ label }) => {
  const style = {
    backgroundColor: `#${label.color}`,
  };
  return (
    <span className="Label" style={style}>
      {label.name}
    </span>
  );
};

export default Label;
