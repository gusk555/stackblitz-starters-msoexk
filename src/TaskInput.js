import React from 'react';

export default function TaskInput() {
  return (
    <form>
      <label>
        Task ID:
        <input 
        name="taskId"
        placeholder="type ID here..."
        type="text" />
      </label>
    </form>
  );
}
