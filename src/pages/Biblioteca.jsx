import { Link } from "react-router-dom"

function Biblioteca({
  biblioteca,
  instalarJuego,
  ejecutarJuego
}) {
  return (
    <main className="container">
      <h1>Biblioteca de juegos</h1>

      <p>
        Accedé a los videojuegos comprados.
      </p>

      {biblioteca.length === 0 ? (
        <div className="mensaje-vacio">
          <h2>No tenés juegos en tu biblioteca</h2>

          <p>
            Comprá un juego desde la tienda para verlo acá.
          </p>

          <Link className="btn" to="/">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="grid-juegos biblioteca-grid">
          {biblioteca.map((juego) => (
            <div className="card-juego" key={juego.id}>
              <img
                src={juego.imagen}
                alt={juego.nombre}
              />

              <div className="card-info">
                <h3>{juego.nombre}</h3>

                <p>{juego.descripcion}</p>

                <strong>
                  Estado: {juego.estadoInstalacion}
                </strong>

                {juego.estadoInstalacion === "Comprado" && (
                  <button
                    className="btn"
                    onClick={() => instalarJuego(juego.id)}
                  >
                    Instalar
                  </button>
                )}

                {juego.estadoInstalacion === "Instalando..." && (
                  <button
                    className="btn btn-disabled"
                    disabled
                  >
                    Instalando...
                  </button>
                )}

                {juego.estadoInstalacion === "Instalado" && (
                  <button
                    className="btn btn-success"
                    onClick={() => ejecutarJuego(juego.nombre)}
                  >
                    Jugar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Biblioteca