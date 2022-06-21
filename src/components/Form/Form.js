import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

const Form = ({ task, setTask, todos, setTodos, editTodo, setEditTodo }) => {
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.title);
    } else {
      setTask('');
    }
  }, [setTask, editTodo]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      todo.id === id ? { title, id, completed } : todo;
    });
    setTodos(newTodo);
    setEditTodo('');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: nanoid(), title: task, completed: false }]);
      setTask('');
    } else {
      updateTodo(task, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Новая задача'
        className='task-input'
        value={task || ''}
        required
        onChange={handleChangeTask}
      />
      <button className='button-add' type='submit'>
        {editTodo ? '💻' : '+'}
      </button>
    </form>
  );
};

export default Form;
