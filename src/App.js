import {useEffect, useReducer} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import AppCtx from './todoAppContext';
import reducer from './todoReducer';
import ACTION_TYPE from './constants/action_type';


function App() {

  const initAppState = {
    query: '',
    items: []
  }
  
  const [store, dispatch] = useReducer(reducer, initAppState);

  useEffect(function () {
    setTimeout(function () {
      const itemFromExternalSystem = [
        { id: 1, title: 'Pay Bills', complete: true },
        { id: 2, title: 'Your Bill', complete: false },
        { id: 3, title: 'Their Bills', complete: false },
        { id: 4, title: 'Our Bills', complete: false },
      ];

      // pass action to reducer func
      dispatch({
        type: ACTION_TYPE.init,
        payload: {
          query: '',
          items: itemFromExternalSystem
        }
      })
    }, 200)
  }, [])// don't pass the argument to an array to trigger (change watcher)

  return (
    <div className='container'>
      <AppCtx.Provider value={{store, dispatch}}>
        <SearchBar txtSearch='' />
        <TodoList />
        <AddTask />
      </AppCtx.Provider>      
    </div>
  );
}

export default App;
