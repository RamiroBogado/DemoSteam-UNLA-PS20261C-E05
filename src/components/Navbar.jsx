import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar({
  biblioteca,
  usuario,
  cerrarSesion,
  notificaciones
}) {
  const [mostrarNotificaciones, setMostrarNotificaciones] =
    useState(false)

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

        <Link to="/amigos">Amigos</Link>

        <div className="notificaciones-container">
          <button
            className="notificaciones-btn"
            onClick={() =>
              setMostrarNotificaciones(
                !mostrarNotificaciones
              )
            }
          >
            🔔

            {notificaciones.length > 0 && (
              <span className="notificaciones-badge">
                {notificaciones.length}
              </span>
            )}
          </button>

          {mostrarNotificaciones && (
            <div className="notificaciones-panel">
              <h4>Notificaciones</h4>

              {notificaciones.map((notificacion, index) => (
                <div
                  className="notificacion-item"
                  key={index}
                >
                  {notificacion}
                </div>
              ))}
            </div>
          )}
        </div>

        {usuario ? (
          <>
            <span className="usuario-navbar">
              Hola, {usuario.nombre}
            </span>

            <button
              className="nav-button"
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar