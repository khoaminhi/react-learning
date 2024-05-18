import React from "react";

export default function TodoItem(props) {
  const {item, onItemDeleted} = props;

  const btnDel_Clicked =() => {
    onItemDeleted(item.id)
  }

  return (
    <li key={item.id} className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button data-id={item.id} onClick={btnDel_Clicked}>Delete</button>}
    </li>
  )
}