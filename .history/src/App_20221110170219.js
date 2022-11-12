import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [inputText, setInputText] = React.useState(null);
  
  return (
    <div className="flex flex-col items-center bg-sky-600 h-screen">
      <Header />
      <Input setInputText={setInputText} />
      h1
      <TodoList />

    </div>
  );
}

export default App;
