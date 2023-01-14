import "./App.css";
// import data from '../data'
import { DragDropContext } from "react-beautiful-dnd";
import "./bootstrap.css";
import KanBoard from "./components/KanBoard";
import TaskForm from "./components/TaskForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IN_PROGRESS_TASK, DONE_TASK, TODO } from "./redux/actions/types";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    console.log("Result", result);
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) return;
    const getType = (form, to) => {
      switch (to) {
        case "todo":
          return TODO;

        case "in_progress":
          return IN_PROGRESS_TASK;

        case "done":
          return DONE_TASK;
        default:
          return TODO;
      }
    };
    dispatch({
      payload: Number(draggableId),
      type: getType(source.droppableId, destination.droppableId)
    });
  };

  const getTodos = (status) => {
    return tasks.filter((item) => item.status === status);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <TaskForm />
        <div className="app_outer">
          <div className="app_boards">
            <KanBoard title={"To Do"} cards={getTodos("todo")} type={"todo"} />
            <KanBoard
              title={"In Progress"}
              cards={getTodos("in_progress")}
              type={"in_progress"}
            />
            <KanBoard title={"Done"} cards={getTodos("done")} type={"done"} />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
