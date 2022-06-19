import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Form from './components/Form/Form';

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
            input={task}
            setTask={setTask}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
