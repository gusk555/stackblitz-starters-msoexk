import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from './App.js';

export default function Task(t) {
  const { indexClicked, setIndexClicked, editTable } = useContext(TaskContext);
  const [desc, setDesc] = useState(t.description);
  const [stat, setStat] = useState(t.status);
  useEffect(() => setIndexClicked(-1), []);
  if (editTable === true && indexClicked === t.id)
    return (
      <tr
        className="task"
        onClick={() => setIndexClicked(t.id)}
        style={
          indexClicked === t.id
            ? { background: 'cyan' }
            : { background: 'white' }
        }
      >
        <td>{t.id}</td>
        <td>
          <input type="text" value={desc} onChange={(event)=>setDesc(event.target.value)} />
        </td>
        <td>
        <select
          value={stat}
          onChange={(event) => setStat(event.target.value)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        </td>
      </tr>
    );
  return (
    <tr
      className="task"
      onClick={() => setIndexClicked(t.id)}
      style={
        indexClicked === t.id ? { background: 'cyan' } : { background: 'white' }
      }
    >
      <td>{t.id}</td>
      <td>{t.description}</td>
      <td>{t.status}</td>
    </tr>
  );
}
