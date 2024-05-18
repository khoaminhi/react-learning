import {useEffect, useState} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

function App() {

  const [items, setItems] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(function () {
    setTimeout(function () {
      const itemFromExternalSystem = [
        { id: 1, title: 'Pay Bills', complete: true },
        { id: 2, title: 'Your Bill', complete: false },
        { id: 3, title: 'Their Bills', complete: false },
        { id: 4, title: 'Our Bills', complete: false },
      ];

      setItems(itemFromExternalSystem)
    }, 200)
  }, [])// don't pass the argument to an array to trigger (change watcher)
  
  const onTaskItemAddedHdl = function (newItem) {
    setItems([...items, newItem])

  }

  /**
   * Dont do this here.
   * This make empty data items
   * Just do at TodoList for filtering on rendering
   */
  // const onQueryChangedHdl = (txtSearch) => {
  //   const resultFilter = items.filter((item) => {
  //     return item.title.includes(txtSearch)
  //   })
  //   setItems(resultFilter)
  //   if (txtSearch === '') setItems(items);
  // }

  const onQueryChangedHdl = (textSearch) => {
    setQuery(textSearch)
  }

  const onItemDeletedHdl = function (idItem)  {
    const listNewItem = items.map((item) => item.id === idItem ? {...item, complete: true} : item)
    setItems(listNewItem)
  }

  return (
    <div className='container'>
      <SearchBar txtSearch='' onQueryChanged={onQueryChangedHdl} />
      <TodoList listTodo={items} txtSearch={query} onItemDeleted={onItemDeletedHdl}/>
      <AddTask onTaskItemAdded={onTaskItemAddedHdl}/>

      
    </div>
  );
}

export default App;
