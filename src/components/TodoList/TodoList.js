import React from 'react';

const TodoList = ({ todos, setTodos }) => {
  const handleTask = (e) => {
    e.preventDefault();
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
          <div>
            <button className='button-complete task-button'>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button'>
              <i className='fa fa-edit'></i>
            </button>
            <button
              className='button-delete task-button'
              onClick={() => handleDelete(todo)}
            >
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
