import * as React from 'react';
import TaskTable from './TaskTable'
import TaskInput from './TaskInput.js'
import './style.css';

export default function App() {
  return (
    <div className='App'>
      <TaskInput />
      <TaskTable />
    </div>
  );
}

