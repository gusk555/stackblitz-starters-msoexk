import React from 'react';

export default function TaskInput() {
  return (
    <form>
      <label>
        Task ID:
        <input name="taskId" placeholder="Enter ID here..." type="text" />
      </label>
      <br />
      <br />
      <label>
        Task Descritption:
        <input
          name="taskDescription"
          placeholder="Enter description here..."
          type="text"
        />
      </label>
      <br />
      <br />
      <label>
        Task Status:
        <select>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
    </form>
  );
}
