import React, { useContext } from "react";
import AppCtx from "../todoAppContext";
import ACTION_TYPE from "../constants/action_type";

export default function TodoItem(props) {
  const {item} = props;
  const {dispatch} = useContext(AppCtx)

  const btnDel_Clicked =() => {
    dispatch({
      type: ACTION_TYPE.complete_item,
      payload: item.id
    })
  }

  return (
    <li key={item.id} className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button data-id={item.id} onClick={btnDel_Clicked}>Delete</button>}
    </li>
  )
}