import React from "react";

// const data = [
//   { id: 1, title: 'Pay Bills', complete: true },
//   { id: 2, title: 'Your Bill', complete: false },
//   { id: 3, title: 'Their Bills', complete: false },
//   { id: 4, title: 'Our Bills', complete: false },
// ];

export default function TodoList(props) {
  const {listTodo, txtSearch} = props;
  // const [items, setItems] = useState(listTodo);
  // const btnAdd_Clicked = function () {
  //   const item = {id: items.length + 1, title: 'add ' + (items.length + 1), complete: false};
  //   // items.push(item);
  //   // console.log(items)

  //   setItems([...items, item])
  // }
  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          listTodo.map(item =>
            item.title.includes(txtSearch)
            &&
            <li key={item.id} className={item.complete ? 'done' : ''}>
              {item.title}
              {!item.complete && <button>Delete</button>}
            </li>
          )
        }
      </ul>
      {/* <button onClick={btnAdd_Clicked}>Add</button> */}
    </div>
  )
}