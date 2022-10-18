import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function Drag({ items, addItem }) {
  const [title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addItem({
      title: title,
      id: uuid(),
    });
  };

  return (
    <div className="drag">
      <form onSubmit={onSubmit} className="drag__add">
        <input
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button disabled={!title}>Add Item</button>
      </form>
      <div className="drag__list">
        {items.map((item) => (
          <Item title={item.title} id={item.id} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Drag;
