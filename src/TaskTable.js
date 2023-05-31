import * as React from 'react';
import Task from '../Task';
import taskData from './TaskData';

export default function TaskTable() {
  return (
    <div className="TaskTable">
      <table>
        <thead>
          <tr>
            <th style={{ width: '10℅' }}>ID</th>
            <th>Description</th>
            <th style={{ width: '20%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task) => {
            return <Task key={task.id} {...task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
