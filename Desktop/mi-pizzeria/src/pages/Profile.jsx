function Profile() {
    return (
      <div style={{ padding: '1rem' }}>
        <h2>Perfil de usuario</h2>
        <p>Email: usuario@ejemplo.com</p>
        <button onClick={() => alert('Cerrar sesión (próximamente)')}>Cerrar sesión</button>
      </div>
    );
  }
  
  export default Profile;
  