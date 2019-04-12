import { newTask } from "../model/Task";

export const POST = "POST";
export const INPUT = "INPUT";
export const CHECK = "CHECK";
export const DELETE = "DELETE";
export const SELECT = "SELECT";

export const NONE = "NONE";
export const PROGRESS = "PROGRESS";
export const DONE = "DONE";

const Counter = init => {
  let i = init;
  return () => i++;
};

export const init = (tasks = [], input = "", filter = NONE) => {
  const counter = Math.max(0, ...tasks.map(x => x.id + 1));
  return {
    tasks,
    input,
    filter,
    idGenerator: new Counter(counter)
  };
};

export default (state, action) => {
  const { type } = action;
  const { tasks, input, idGenerator } = state;

  switch (type) {
    case POST:
      return {
        ...state,
        tasks:
          input.length > 0
            ? tasks.concat(newTask(idGenerator(), input))
            : tasks,
        input: ""
      };

    case INPUT:
      return {
        ...state,
        input: action.str
      };

    case CHECK:
      return {
        ...state,
        tasks: tasks.map(x =>
          x.id === action.id ? { ...x, isDone: !x.isDone } : x
        )
      };

    case DELETE:
      return {
        ...state,
        tasks: tasks.filter(x => x.id !== action.id)
      };

    case SELECT:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};
