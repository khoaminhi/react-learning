import React, { useState } from "react";

const data = [
  { id: 1, title: 'Pay Bills', complete: true },
  { id: 2, title: 'Your Bill', complete: false },
  { id: 3, title: 'Their Bills', complete: false },
  { id: 4, title: 'Our Bills', complete: false },
];

export default function SearchBar() {
  const [items, setItems] = useState(data);
  const btnAdd_Clicked = function () {
    const item = {id: items.length + 1, title: 'add ' + (items.length + 1), complete: false};
    // items.push(item);
    // console.log(items)

    setItems([...items, item])
  }
  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          items.map(item =>
            <li key={item.id} className={item.complete ? 'done' : ''}>
              {item.title}
              {!item.complete && <button>Delete</button>}
            </li>
          )
        }
      </ul>
      <button onClick={btnAdd_Clicked}>Add</button>
    </div>
  )
}