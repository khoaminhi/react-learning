import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import AppCtx from "../todoAppContext";

export default function TodoList(props) {

  let {items: listTodo, query: txtSearch} = useContext(AppCtx);
  txtSearch ??= '';

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          listTodo.map(item =>
            item.title.toLocaleLowerCase().includes(txtSearch.toLocaleLowerCase())
            &&
            <TodoItem key={item.id} item={item} />
          )
        }
      </ul>
    </div>
  )
}