import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Monitor from './pages/Monitor';
import QuotePage from './pages/QuotePage';
import quotes from './quotes.json';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Monitor />} />
        {quotes.map((q, i) => (
          <Route key={i} path={'/' + String(100 + i)} element={<QuotePage index={i} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}