import React, { useEffect, useRef } from 'react';
import quotes from '../quotes.json';
import chime from '../assets/sounds/chime.mp3';
import '../fade.css';
import Snow from "../components/Snow";

export default function QuotePage({ index }) {
  const q = quotes[index];

  // audio ref
  const audioRef = useRef(new Audio(chime));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.7;
    audio.play().catch(() => { }); // autoplay fallback

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [index]);

  const handlePlay = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div
      className="fade"
      style={{
        height: '100vh',
        backgroundImage: `url(/backgrounds/${index + 1}.png)`,
        backgroundSize: '100% 100%',   // FULL stretch
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'relative' // IMPORTANT for snow overlay
      }}
    >
      {/* Sound Button */}
      <button
        onClick={handlePlay}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '15px 20px',
          background: 'rgba(255,255,255,0)',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '2rem',   // bigger icon
          zIndex: 10
        }}
      >
        🔔 {index + 1}
      </button>

      {/* Content */}
      <div
        style={{
          padding: 20,
          borderRadius: 12,
          maxWidth: 350,
          textAlign: 'center',
          zIndex: 10,
          color: "white",
          textShadow: "0px 2px 8px rgba(0,0,0,0.9)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 100%)"
        }}
      >
        <h2>{q.text}</h2>
        <p> {q.meaning}</p>
        <p><b>Exercise:</b> {q.exercise}</p>
      </div>


      {/* ❄ SNOW COMPONENT */}
      <Snow />
    </div>
  );
}
