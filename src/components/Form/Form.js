import React from 'react';

const Form = ({ task, setTask, todos, setTodos }) => {
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Новая задача'
        className='task-input'
        value={task}
        required
        onChange={handleChangeTask}
      />
      <button className='button-add' type='submit'>
        +
      </button>
    </form>
  );
};

export default Form;
