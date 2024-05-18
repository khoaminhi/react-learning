import React, { useState } from "react";

export default function SearchBar(props) {
  const { txtSearch, onQueryChanged } = props;
  const [query, setQuery] = useState(txtSearch);

  const txtQuery_Changed = (e) => {
    setQuery(e.target.value)
    // onQueryChanged(query) // async => https://youtu.be/_3EUrVFTOE4?t=759
    onQueryChanged(e.target.value)
  }

  /* Cannot update a component (`App`) while rendering a different component (`SearchBar`). 
  * To locate the bad setState() call inside `SearchBar`, follow the stack trace as described in 
  * https://reactjs.org/link/setstate-in-render
  */
  // onQueryChanged(query)

  const btnClear_Clicked = () => {
    setQuery(txtSearch)
    onQueryChanged(txtSearch)
  }
  const txtQueryKeyUp = (e) => {
    if (e.keyCode === 27) {
      setQuery(txtSearch)
      onQueryChanged(txtSearch)
    }
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        Filter task by name
        <div className='fg'>
          <input type='text' value={query} onChange={txtQuery_Changed} onKeyUp={txtQueryKeyUp} />
          <button type='button' onClick={btnClear_Clicked}>Clear</button>
        </div>
      </label>
    </div>
  )
}