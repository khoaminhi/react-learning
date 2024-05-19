import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import AppCtx from "../todoAppContext";

export default function TodoList(props) {

  let {store} = useContext(AppCtx);
  store.query ??= '';

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          store.items.map(item =>
            item.title.toLocaleLowerCase().includes(store.query.toLocaleLowerCase())
            &&
            <TodoItem key={item.id} item={item} />
          )
        }
      </ul>
    </div>
  )
}