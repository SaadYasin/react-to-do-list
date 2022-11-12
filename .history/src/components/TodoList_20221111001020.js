import React from 'react'

// Import components
import Todo from './Todo'
export const TodoList = ( { todos }) => {

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo} text={ todo.text} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
