import React from "react";
import { NONE, PROGRESS, DONE } from "../reducer/App";

export default ({ onClick, filterType }) => {
  const isDisable = btnType => ({ disabled: filterType === btnType });

  return (
    <div className="Filter">
      <button onClick={onClick(NONE)} {...isDisable(NONE)}>
        全部
      </button>
      <button onClick={onClick(DONE)} {...isDisable(DONE)}>
        完了
      </button>
      <button onClick={onClick(PROGRESS)} {...isDisable(PROGRESS)}>
        未完了
      </button>
    </div>
  );
};
