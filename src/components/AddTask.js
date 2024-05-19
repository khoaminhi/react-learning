import React, {useContext, useState} from "react";
import AppCtx from "../todoAppContext";
import ACTION_TYPE from "../constants/action_type";

export default function AddTask(props) {
  const [itemTitle, setItem] = useState('New title 😊');
  const {dispatch} = useContext(AppCtx);

  const btnAdd_Clicked = function () {
    const newItem = {
      id: Date.now(),
      title: itemTitle,
      complete: false
    }

    dispatch({
      type: ACTION_TYPE.add_item,
      payload: newItem
    })
  }

  const txtItemTitle_Changed = function (e) {
    setItem(e.target.value)
  }

  const txtItemTitle_KeyUp = function (e) {
    if (e.keyCode !== 13 || e.target.value === '') return;

    btnAdd_Clicked()
  }

  return (
    <div>
      <h3>Add item</h3>
      <p>{itemTitle}</p>
      <div className='fg'>
        <input type='text' value={itemTitle} onChange={txtItemTitle_Changed} onKeyUp={txtItemTitle_KeyUp}/>
        <button type='button' onClick={btnAdd_Clicked}>Add</button>
      </div>
    </div>
  )
}