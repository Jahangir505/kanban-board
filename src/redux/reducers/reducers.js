import {
  ADD_TASK,
  IN_PROGRESS_TASK,
  DONE_TASK,
  DELETE_TASK,
  TODO
} from "../actions/types";

const initialState = {
  tasks: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const task = {
        name: action.payload,
        status: "todo",
        id: state.tasks.length + 1
      };
      return {
        ...state,
        tasks: [...state.tasks, task]
      };
    case IN_PROGRESS_TASK:
      console.log(action);
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload) {
            item.status = "in_progress";
          }

          return item;
        })
      };
    case TODO:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload) {
            item.status = "todo";
          }

          return item;
        })
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload) {
            item.status = "done";
          }

          return item;
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    default:
      return state;
  }
}
export default reducer;
