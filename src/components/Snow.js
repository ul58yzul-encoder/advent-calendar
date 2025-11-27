import React from "react";
import "./snow.css";

export default function Snow() {
  const flakes = Array.from({ length: 60 });

  return (
    <div className="snow-container">
      {flakes.map((_, i) => {
        const left = Math.random() * 100;            // random X position
        const delay = Math.random() * 5;             // random start delay
        const size = Math.random() * 1.2 + 0.6;      // random size scale (0.6–1.8)
        const duration = Math.random() * 5 + 7;      // random fall speed (7–12 sec)

        return (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}rem`,
            }}
          >
            ❄
          </div>
        );
      })}
    </div>
  );
}
