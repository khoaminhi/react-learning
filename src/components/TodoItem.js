import React, { useContext } from "react";
import AppCtx from "../todoAppContext";

export default function TodoItem(props) {
  const {item} = props;
  const {items, setItems} = useContext(AppCtx)

  const btnDel_Clicked =() => {
    const listNewItem = items.map((i) => i.id === item.id ? {...i, complete: true} : i)
    setItems(listNewItem)
  }

  return (
    <li key={item.id} className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button data-id={item.id} onClick={btnDel_Clicked}>Delete</button>}
    </li>
  )
}