import React, { useContext, useEffect, useState } from "react";
import AppCtx from "../todoAppContext";
import ACTION_TYPE from "../constants/action_type";

export default function SearchBar(props) {
  const { txtSearch } = props;
  const [search, setSearch] = useState(txtSearch);
  const {dispatch} = useContext(AppCtx)

  useEffect(function () {
    dispatch({
      type: ACTION_TYPE.change_search,
      payload: search
    })
  }, [search, dispatch])

  const txtQuery_Changed = (e) => {
    setSearch(e.target.value)
  }
  const btnClear_Clicked = () => {
    setSearch(txtSearch)
  }
  const txtQueryKeyUp = (e) => {
    if (e.keyCode === 27) {// enter
      setSearch(txtSearch)
    }
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        Filter task by name
        <div className='fg'>
          <input type='text' value={search} onChange={txtQuery_Changed} onKeyUp={txtQueryKeyUp} />
          <button type='button' onClick={btnClear_Clicked}>Clear</button>
        </div>
      </label>
    </div>
  )
}