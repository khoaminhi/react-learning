import {useEffect, useState} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AppCtx from './todoAppContext';


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

  return (
    <div className='container'>
      <AppCtx.Provider value={{items, setItems, query, setQuery}}>
        <SearchBar txtSearch='' />
        <TodoList listTodo={items} txtSearch={query} />
        <AddTask />
      </AppCtx.Provider>      
    </div>
  );
}

export default App;
