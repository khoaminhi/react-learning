import './App.css';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
      <SearchBar />
      <TodoList />
      <AddTask />

      
    </div>
  );
}

export default App;
