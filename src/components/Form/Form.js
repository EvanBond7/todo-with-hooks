import React from 'react';

const Form = () => {
  return (
    <form action=''>
      <input type='text' placeholder='Новая задача' className='task-input' />
      <button className='button-add' type='submit'>
        +
      </button>
    </form>
  );
};

export default Form;
