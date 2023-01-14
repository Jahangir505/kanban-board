import React, { useState } from "react";
import "./taskForm.css";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../../redux/actions/types";
const TaskForm = () => {
  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      payload: task,
      type: ADD_TASK
    };
    dispatch(payload);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={submit} className={"form"}>
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder={"Write your task ..."}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
