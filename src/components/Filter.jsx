import React from "react";
import { NONE, PROGRESS, DONE } from "../reducer/App";
import "../style/Filter.css";

export default ({ onClick, filterType }) => {
  const isDisable = btnType => ({ disabled: filterType === btnType });

  return (
    <div className="Filter">
      <button onClick={onClick(NONE)} {...isDisable(NONE)}>
        All
      </button>
      <button onClick={onClick(DONE)} {...isDisable(DONE)}>
        Done
      </button>
      <button onClick={onClick(PROGRESS)} {...isDisable(PROGRESS)}>
        Progress
      </button>
    </div>
  );
};
