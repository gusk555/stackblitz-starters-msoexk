import * as React from 'react';

export default function Task(t) {
  return (
    <tr className="task">
      <td>{t.id}</td>
      <td>{t.description}</td>
      <td>{t.status}</td>
    </tr>
  );
}
