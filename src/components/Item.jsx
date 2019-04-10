import React from "react";
import "../style/Item.css";
import Checkbox from "./Checkbox";

export default props => {
  return (
    <li className="Item" onClick={props.onClick}>
      <Checkbox onClick={props.onClick} isCheck={props.isCheck} />
      <span>{props.name}</span>
      <button
        onClick={e => {
          e.stopPropagation();
          props.onDelete();
        }}
      >
        X
      </button>
    </li>
  );
};
