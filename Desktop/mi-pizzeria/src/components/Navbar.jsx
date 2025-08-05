import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8f8f8' }}>
      <Link to="/">Inicio</Link>
      <Link to="/register">Registro</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/cart">🛒 Total: $999</Link>
    </nav>
  );
}

export default Navbar;
