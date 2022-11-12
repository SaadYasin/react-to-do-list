import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // State setters
  const [inputText, setInputText] = React.useState(null);
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

  }, [todos]); 

  // Functions
  const filterList = () => { 
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todos => todos.completed === true));
        break;
      
      case "uncompleted":
        setFilteredTodos(todos.filter(todos => todos.completed === false));
        break;
    
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  
  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen">
      <Header />
      <Input todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList setTodos={setTodos} todos={ todos } />

    </div>
  );
}

export default App;