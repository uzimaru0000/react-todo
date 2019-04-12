import React from "react";
import Item from "./Item";
import "../style/List.css";
import { PROGRESS, NONE, DONE } from "../reducer/App";

const isDisable = type => isDone => {
  switch (type) {
    case NONE:
      return true;
    case DONE:
      return isDone;
    case PROGRESS:
      return !isDone;
    default:
      return true;
  }
};

export default ({ tasks, filterType, checkEvent, deleteEvent }) => {
  return (
    <div className="List">
      {tasks
        ? tasks
            .filter(x => isDisable(filterType)(x.isDone))
            .map(x => (
              <Item
                key={x.id}
                isCheck={x.isDone}
                name={x.title}
                onClick={checkEvent(x.id)}
                onDelete={deleteEvent(x.id)}
              />
            ))
        : null}
    </div>
  );
};
