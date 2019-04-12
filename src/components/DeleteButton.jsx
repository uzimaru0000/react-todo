import React from "react";
import "../style/DeleteButton.css";

export default ({ onClick }) => {
  return (
    <button className="DeleteButton" onClick={onClick}>
      <span className="mark" />
    </button>
  );
};
