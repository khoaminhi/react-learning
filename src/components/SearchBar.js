import React from "react";

export default function SearchBar () {
    return (
        <div>
            <label style={{fontWeight: 'bold'}}>
              Filter task by name
              <div className='fg'>
                  <input type='text'/>
                  <button type='button'>Clear</button>
              </div>
            </label>
        </div>
    )
}