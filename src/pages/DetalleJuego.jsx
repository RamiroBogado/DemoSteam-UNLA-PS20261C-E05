import { Link, useParams } from "react-router-dom"
import juegos from "../data/juegos"

function DetalleJuego() {
  const { id } = useParams()

  const juego = juegos.find(
    (juego) => juego.id === Number(id)
  )

  if (!juego) {
    return (
      <main className="container">
        <h1>Juego no encontrado</h1>

        <Link className="btn" to="/">
          Volver al catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="container">
      <Link className="volver" to="/">
        ← Volver al catálogo
      </Link>

      <section className="detalle">
        <img
          src={juego.imagen}
          alt={juego.nombre}
        />

        <div>
          <h1>{juego.nombre}</h1>

          <p>{juego.descripcion}</p>

          <h3>
            {juego.precio === 0
              ? "Gratis"
              : `USD $${juego.precio.toFixed(2)}`}
          </h3>

          <p className="detalle-texto">
            Disponible en Steam MVP.
            Este videojuego puede comprarse
            para agregarlo a la biblioteca.
          </p>

          <Link
            className="btn btn-buy"
            to={`/compra/${juego.id}`}
          >
            Comprar
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DetalleJuego