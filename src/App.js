import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            task={task}
            setTask={setTask}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
