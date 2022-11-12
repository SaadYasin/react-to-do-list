import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App( { task }) {
  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen">
      <Header />
      <Input newTask= />
      <TodoList />

    </div>
  );
}

export default App;
