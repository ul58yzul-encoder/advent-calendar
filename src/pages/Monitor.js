import React from 'react';
import { quotes } from '../quotes';

export default function Monitor() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Quotes Monitor</h1>
      <ul>
        {quotes.map((q, i) => (
          <li key={i}>
            <a href={'/' + q.id}>{'Quote ' + (i + 1)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
