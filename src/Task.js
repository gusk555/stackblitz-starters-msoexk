import * as React from 'react';
import { useContext, useEffect } from 'react';
import { TaskContext } from './App.js';

export default function Task(t) {
  const { indexClicked, setIndexClicked } = useContext(TaskContext);
  useEffect(() => setIndexClicked(-1), []);
  console.log(indexClicked);
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
