import React, { useReducer, useEffect } from "react";
import "./style/App.css";

import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Filter from "./components/Filter";
import Reducer, {
  init,
  INPUT,
  POST,
  SELECT,
  CHECK,
  DELETE
} from "./reducer/App";

const getInitTask = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export default () => {
  const [state, dispatch] = useReducer(Reducer, init(getInitTask()));

  const inputEvent = e => dispatch({ type: INPUT, str: e.target.value });
  const enterEvent = e => (e.keyCode === 13 ? dispatch({ type: POST }) : null);
  const filterEvent = type => () => dispatch({ type: SELECT, filter: type });
  const checkEvent = i => () => dispatch({ type: CHECK, id: i });
  const deleteEvent = i => () => dispatch({ type: DELETE, id: i });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <div className="App">
      <Form onChange={inputEvent} onEnter={enterEvent} value={state.input} />
      <Filter onClick={filterEvent} filterType={state.filter} />
      <List
        checkEvent={checkEvent}
        deleteEvent={deleteEvent}
        tasks={state.tasks}
        filterType={state.filter}
      />
    </div>
  );
};
