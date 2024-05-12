import React, {useState} from "react";

export default function AddTask() {
  const [item, setItem] = useState('init value');
  const btnAdd_Clicked = function () {
    setItem('khoa ngu')
  }

  const txtItemTitle_Changed = function (e) {
    setItem(e.target.value)
  }
  return (
    <div>
      <h3>Add item</h3>
      <p>{item}</p>
      <div className='fg'>
        <input type='text' value={item} onChange={txtItemTitle_Changed}/>
        <button type='button' onClick={btnAdd_Clicked}>Add</button>
      </div>
    </div>
  )
}