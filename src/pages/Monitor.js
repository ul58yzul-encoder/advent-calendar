import React from "react";
import { Link } from "react-router-dom";
import quotes from "../quotes.json";
import "./Monitor.css";

export default function Monitor() {
  return (
    <div className="monitor-container">
      <div className="monitor-card">
        <h1 className="monitor-title">Advent Quotes</h1>

        <div className="quotes-grid">
          {quotes.map((q, i) => {
            const route = String(100 + i);

            return (
              <Link key={i} to={route} className="quote-box">
                <div className="quote-number">{route}</div>
                <div className="quote-title">
                  {q.title || `Quote ${i + 1}`}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
