import React, { useState } from "react";
import Drag from "./Drag";
import Drop from "./Drop";

function DragDrop() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="drag-drop">
      <Drag items={items} addItem={addItem} />
      <Drop items={items} />
    </div>
  );
}

export default DragDrop;
