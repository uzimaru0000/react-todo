import React from "react";
import "../style/Checkbox.css";

export default props => {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        props.onClick();
      }}
      className={"Checkbox " + (props.isCheck ? "check" : "")}
    />
  );
};
