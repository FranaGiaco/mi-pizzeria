import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="container-fluid">
        {/* Botón Home siempre visible */}
        <button className="btn btn-outline-primary me-2">🍕 Home</button>

        {/* Mostrar botones según token */}
        {token ? (
          <>
            <button className="btn btn-outline-success me-2">🔓 Profile</button>
            <button className="btn btn-outline-danger me-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-primary me-2">🔐 Login</button>
            <button className="btn btn-outline-secondary me-2">🔐 Register</button>
          </>
        )}

        {/* Botón Total siempre visible */}
        <button className="btn btn-outline-warning ms-auto">
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
