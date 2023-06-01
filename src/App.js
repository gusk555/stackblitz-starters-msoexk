import * as React from 'react';
import TaskTable from './TaskTable';
import TaskInput from './TaskInput.js';
import Data from './TaskData.json';
import './style.css';
import { useState, createContext } from 'react';

export const TaskContext = createContext(null);

export default function App() {
  const [taskData, setTaskData] = useState(Data);
  return (
    <div className="App">
      <TaskContext.Provider value={{ taskData, setTaskData }}>
        <TaskInput />
        <TaskTable />
      </TaskContext.Provider>
    </div>
  );
}
