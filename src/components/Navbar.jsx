import { Link } from "react-router-dom"

function Navbar({ biblioteca, usuario, cerrarSesion }) {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        STEAM MVP
      </Link>

      <div className="nav-links">
        <Link to="/">Tienda</Link>

        <Link to="/biblioteca">
          Biblioteca ({biblioteca.length})
        </Link>

        {usuario ? (
          <>
            <span className="usuario-navbar">
              Hola, {usuario.nombre}
            </span>

            <button className="nav-button" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar