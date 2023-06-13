import * as React from 'react';
import { useContext, useEffect } from 'react';
import { TaskContext } from './App.js';

export default function Task(t) {
  const { indexClicked, setIndexClicked, editTable } = useContext(TaskContext);
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
        <td><input type='text' value={t.id}/></td>
        <td><input type='text' value={t.description}/></td>
        <td><input type='text' value={t.status}/></td>
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
