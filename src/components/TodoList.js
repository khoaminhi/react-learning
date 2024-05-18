import React from "react";
import TodoItem from "./TodoItem";

// const data = [
//   { id: 1, title: 'Pay Bills', complete: true },
//   { id: 2, title: 'Your Bill', complete: false },
//   { id: 3, title: 'Their Bills', complete: false },
//   { id: 4, title: 'Our Bills', complete: false },
// ];

export default function TodoList(props) {
  const {listTodo, txtSearch, onItemDeleted} = props;
  // const [items, setItems] = useState(listTodo);
  // const btnAdd_Clicked = function () {
  //   const item = {id: items.length + 1, title: 'add ' + (items.length + 1), complete: false};
  //   // items.push(item);
  //   // console.log(items)

  //   setItems([...items, item])
  // }

  // Pass id of item to delete, method 1: use pure js
  // 
  // const btnDel_Clicked =(e) => {
  //   console.log('delete', this)
  //   console.log('delete e', e.target.dataset['id'])
  // }

  const onItemDeletedHdl = function (idItem) {
    onItemDeleted(idItem)
  }

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {/* Pass id of item to delete, method 2: use react component */}
        {
          listTodo.map(item =>
            item.title.includes(txtSearch)
            &&
            <TodoItem key={item.id} item={item} onItemDeleted={onItemDeletedHdl} />
          )
        }
      </ul>

      {/* Pass id of item to delete, method 1: use pure js */}
      {/* <ul>
        {
          listTodo.map(item =>
            item.title.includes(txtSearch)
            &&
            <li key={item.id} className={item.complete ? 'done' : ''}>
              {item.title}
              {!item.complete && <button data-id={item.id} onClick={btnDel_Clicked}>Delete</button>}
            </li>
          )
        }
      </ul> */}
      {/* <button onClick={btnAdd_Clicked}>Add</button> */}
    </div>
  )
}