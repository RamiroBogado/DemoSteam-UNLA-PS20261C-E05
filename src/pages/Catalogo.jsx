import { Link } from "react-router-dom"
import juegos from "../data/juegos"

function Catalogo() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <span className="hero-badge">
            OFERTAS DE TEMPORADA
          </span>

          <h1>Catálogo de videojuegos</h1>

          <p>
            Explorá juegos disponibles, compralos y agregalos a tu biblioteca.
          </p>
        </div>
      </section>

      <input
        className="buscador"
        placeholder="Buscar juegos..."
      />

      <div className="grid-juegos">
        {juegos.map((juego) => (
          <div className="card-juego" key={juego.id}>
            <img
              src={juego.imagen}
              alt={juego.nombre}
            />

            <div className="card-info">
              <h3>{juego.nombre}</h3>

              <p>{juego.descripcion}</p>

              {juego.precio === 0 ? (
                <span className="badge-gratis">
                  Gratis
                </span>
              ) : (
                <strong>
                  USD ${juego.precio.toFixed(2)}
                </strong>
              )}

              <div className="acciones-card">
                <Link
                  className="btn"
                  to={`/juego/${juego.id}`}
                >
                  Ver detalle
                </Link>

                <Link
                  className="btn btn-buy"
                  to={`/compra/${juego.id}`}
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Catalogo