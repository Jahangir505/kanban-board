import React from "react";
import "./kanBoard.css";
import Card from "../Card";
import { Droppable } from "react-beautiful-dnd";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "inherit",
  padding: 1,
  height: 400
});
const KanBoard = ({ title, cards, type }) => {
  console.log("Card", cards);
  return (
    <div className={"kan-board"}>
      <div className={"heading"}>
        <h2>{title}</h2>
      </div>
      <Droppable droppableId={type} type="TASK">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {provided.placeholder}
            {cards?.length > 0 &&
              cards?.map((item, index) => (
                <Card item={item} index={index} key={item.id} />
              ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanBoard;
