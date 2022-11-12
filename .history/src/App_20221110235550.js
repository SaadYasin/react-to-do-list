import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = React.useState(null);
  const [todos, setTodos] = React.useState([]);
  
  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen">
      <Header />
      <Input todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <h1>{ inputText }</h1>
      <TodoList todos={ todos } />

    </div>
  );
}

export default App;
