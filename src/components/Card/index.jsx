import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./cardStyle.css";
import { useDispatch } from "react-redux";
import { DELETE_TASK } from "../../redux/actions/types";

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 2,
  margin: `0 0 2px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#8080805e",

  // styles we need to apply on draggables
  ...draggableStyle
});

const Card = ({ item, index }) => {
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch({
      payload: id,
      type: DELETE_TASK
    });
  };
  return (
    <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div className={"card"}>
            <h3>{item?.name}</h3>
            <button onClick={() => deleteTask(item?.id)}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
