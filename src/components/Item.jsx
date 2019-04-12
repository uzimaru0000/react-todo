import React from "react";
import "../style/Item.css";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

export default props => {
  return (
    <div className="Item">
      <Checkbox
        label={props.name}
        onClick={props.onClick}
        isCheck={props.isCheck}
      />
      <DeleteButton onClick={props.onDelete} />
    </div>
  );
};
