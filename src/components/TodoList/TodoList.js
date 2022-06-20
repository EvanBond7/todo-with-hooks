import React from 'react';

const TodoList = ({ todos, setTodos }) => {
  const handleTask = (e) => {
    e.preventDefault();
  };

  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className='list'
            onChange={handleTask}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
