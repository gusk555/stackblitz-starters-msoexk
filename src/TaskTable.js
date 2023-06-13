import * as React from 'react';
import Task from './Task';
import { useContext } from 'react';
import { TaskContext } from './App.js';

export default function TaskTable() {
  const { taskData, indexClicked, setEditTable } = useContext(TaskContext);
  return (
    <div className="TaskTable">
      <button name="SaveButtonTable">Save</button>
      <button name="CancelButtonTable">Cancel</button>
      <button
        name="EditButtonTable"
        onClick={() => {
          indexClicked !== -1 ? setEditTable(true) : setEditTable(false);
        }}
      >
        Edit
      </button>
      <button name="DeleteButtonTable">Delete</button>
      <table>
        <thead>
          <tr>
            <th style={{ width: '10℅' }}>ID</th>
            <th>Description</th>
            <th style={{ width: '20%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}
