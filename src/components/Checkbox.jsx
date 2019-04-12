import React from "react";
import "../style/Checkbox.css";

export default props => {
  return (
    <label className="Checkbox">
      <input type="checkbox" onChange={props.onClick} checked={props.isCheck} />
      <span>{props.label}</span>
    </label>
  );
};
