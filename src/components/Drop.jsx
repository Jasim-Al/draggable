import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function Drop() {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "drag",
    drop: (item) => {
      addItem(item.title);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItem = (title) => {
    setDroppedItems((droppedItems) => [
      ...droppedItems,
      { title: title, id: uuid() },
    ]);
  };

  return (
    <div className="drop" ref={drop}>
      {droppedItems.map((item) => (
        <Item title={item.title} id={item.id} key={item.id} />
      ))}
    </div>
  );
}

export default Drop;
