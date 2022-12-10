import React, { useState, useEffect } from 'react';

// Import components
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

const App = () => {
  // Initialize local storage
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  
  // State setters
  const [inputText, setInputText] = React.useState(null);
  const [todos, setTodos] = React.useState(initialState);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // UseEffect hook
  useEffect(() => {
    // Invoke filterList function
    filterList();

    // Save to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]); 

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
  };

  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen bg-[url('/public/img/bg-img.jpg')] mix-blend-">
      <Header />
      <Input
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
