import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
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
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
