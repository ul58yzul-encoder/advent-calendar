import React from 'react';
import quotes from '../quotes.json';

export default function Monitor(){
 return(
  <div style={{padding:20}}>
    <h1>Advent Calendar</h1>
    <ul>
      {quotes.map((q,i)=>(
        <li key={i}><a href={'/'+String(100+i)}>Quote {i+1}</a></li>
      ))}
    </ul>
  </div>
 );
}