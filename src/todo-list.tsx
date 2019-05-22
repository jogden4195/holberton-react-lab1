import React from 'react';
import Todo from './todo';

interface Task {
    text: string;
    id: number;
}

interface TodoListInput {
    todos: Task[];
    handleRemove(id: number): void;
}

const TodoList = ({ todos, handleRemove }: TodoListInput) => {
  function renderList() {
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map(todo =>
        <Todo todo={todo} remove={handleRemove} key={todo.id} />
      );
    }
    return <h3>No Todos remaining!</h3>;
  }

  return (
    <div>
      <p><b>Your Todos:</b></p>
      {renderList()}
    </div>
  );
};

export default TodoList;