import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem', 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      maxWidth: '400px',
      margin: '0 auto',
    }}>
      <h1>404 - Página no encontrada</h1>
      <p>Ups... parece que el Teniente Bello se perdió en la nave 🚀</p>

      <svg
        width="150"
        height="200"
        viewBox="0 0 150 200"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ margin: '1rem auto', display: 'block' }}
      >
        {/* Gorro militar */}
        <rect x="40" y="15" width="70" height="30" fill="#2E3B4E" stroke="#000" strokeWidth="2" rx="10" />
        <circle cx="75" cy="30" r="8" fill="#F5C518" />
        <line x1="75" y1="22" x2="75" y2="38" stroke="#000" strokeWidth="2" />
        
        {/* Cabeza */}
        <circle cx="75" cy="80" r="40" fill="#F4C6B8" stroke="#333" strokeWidth="2" />
        
        {/* Ojos */}
        <circle cx="55" cy="80" r="10" fill="white" />
        <circle cx="95" cy="80" r="10" fill="white" />
        <circle cx="55" cy="80" r="5" fill="#333" />
        <circle cx="95" cy="80" r="5" fill="#333" />
        
        {/* Boca */}
        <path d="M55 120 Q75 140 95 120" stroke="#333" strokeWidth="3" fill="none" />
        
        {/* Cuello */}
        <rect x="60" y="115" width="30" height="30" fill="#2E3B4E" stroke="#000" strokeWidth="2" rx="5" />
      </svg>

      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  );
}
