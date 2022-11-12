import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [task, setTask] = React.useState(null);
  
  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen">
      <Header />
      <Input setTask={inputText} />
      <TodoList />

    </div>
  );
}

export default App;
