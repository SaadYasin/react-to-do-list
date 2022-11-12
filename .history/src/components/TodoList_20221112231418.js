import React from 'react'

// Import components
import Todo from './Todo'

// TodoList component
const TodoList = ({ setTodos, todos, filteredTodos }) => {

  return (
    <div>
      <ul>
        {odos.map((todo) => (
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
