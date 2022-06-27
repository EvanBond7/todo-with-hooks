import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const handleTask = (e) => {
    e.preventDefault();
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const todoFilter = (status) => {
    if (status === 'all') {
      setFiltered(todos);
    } else {
      let newTodo = [...todos].filter((item) => item.completed === status);
      setFiltered(newTodo);
    }
  };
  const handleEditTask = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {filtered.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={handleTask}
          />
          <div>
            <button
              className='button-complete task-button'
              onClick={() => handleComplete(todo)}
            >
              <i className='fa fa-check-circle'></i>
            </button>
            <button
              className='button-edit task-button'
              onClick={() => handleEditTask(todo)}
            >
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
      <div className='btns-group'>
        <button className='btns-group__item' onClick={() => todoFilter('all')}>
          Все
        </button>
        <button className='btns-group__item' onClick={() => todoFilter(true)}>
          Выполнено
        </button>
        <button className='btns-group__item' onClick={() => todoFilter(false)}>
          Не завершено
        </button>
      </div>
    </div>
  );
};

export default TodoList;
