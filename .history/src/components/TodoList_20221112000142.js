import React from 'react'

// Import components
import Todo from './Todo'
// Todo 
const TodoList = ({ setTodos, todos, todo }) => {

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
