import React from 'react'

// Import components
import Todo from './Todo'
export const TodoList = ( { setTodos, todos, todo }) => {

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
