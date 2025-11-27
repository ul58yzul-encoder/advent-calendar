import React from 'react';
import { quotes } from '../quotes';

export default function QuotePage({ index }) {
  const q = quotes[index];
  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(/assets/backgrounds/${index+1}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      textAlign:'center'
    }}>
      <div style={{
        background:'rgba(255,255,255,0.7)',
        padding:20,
        borderRadius:8,
        maxWidth:300
      }}>
        <h2>{q.text}</h2>
      </div>
    </div>
  );
}
