import React from "react";
import { useDrag } from "react-dnd";

function Item({ title, id }) {
  const [{ opacity }, drag] = useDrag(() => ({
    type: "drag",
    item: { id: id, title: title },
  }));
  return (
    <div ref={drag} className="item">
      <h1>{title}</h1>
    </div>
  );
}

export default Item;
