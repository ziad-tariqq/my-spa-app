// src/App.js
import { useEffect, useState } from 'react';
import './App.css';

// In production, this is set on Render. In local dev it can be '' (proxy).
const API = process.env.REACT_APP_API_BASE || '';

export default function App() {
  const [hello, setHello] = useState('loading...');
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // TEXT endpoint
        const r1 = await fetch(`${API}/api/hello`);
        if (!r1.ok) throw new Error(`hello ${r1.status} ${r1.statusText}`);
        const txt = await r1.text();
        setHello(txt);

        // JSON endpoint
        const r2 = await fetch(`${API}/api/health`);
        if (!r2.ok) throw new Error(`health ${r2.status} ${r2.statusText}`);
        const json = await r2.json();
        setHealth(json);
      } catch (e) {
        setError(e.message || String(e));
      }
    })();
  }, []);

  const card = { maxWidth: 820, margin: '48px auto', padding: '16px' };

  return (
    <main style={{ maxWidth: 820, margin: '48px auto', padding: '0 16px' }}>
      <h1>My SPA App</h1>

      {error && (
        <p style={{ color: '#d33', fontWeight: 600 }}>
          Error: {error}
        </p>
      )}

      <section style={card}>
        <h2>Backend /api/hello</h2>
        <p>{hello}</p>
      </section>

      <section style={card}>
        <h2>Backend /api/health</h2>
        <pre>{health ? JSON.stringify(health, null, 2) : '{}'}</pre>
      </section>
    </main>
  );
}
