import React from 'react';
import { useState, useContext } from 'react';
import { TaskContext } from './App.js';

export default function TaskInput() {
  const [taskDesc, setTaskDesc] = useState('');
  const [taskStat, setTaskStat] = useState('Not Started');
  const taskId = Math.floor(Math.random() * 1000000);
  const { taskData, setTaskData } = useContext(TaskContext);
  console.log('Input: ', taskData);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTaskData([...taskData, { taskId, taskDesc, taskStat }]);
      }}
    >
      <label>
        Task ID:
        <input
          name="taskId"
          type="text"
          readOnly={true}
          value={taskId}
          style={{ background: 'gainsboro' }}
        />
      </label>
      <br />
      <br />
      <label>
        Task Descritption:
        <input
          name="taskDescription"
          placeholder="Enter description here..."
          type="text"
          value={taskDesc}
          onChange={(event) => setTaskDesc(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Task Status:
        <select
          value={taskStat}
          onChange={(event) => setTaskStat(event.target.value)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <br />
      <br />
      <input type="submit" />
      <br />
      <br />
    </form>
  );
}
