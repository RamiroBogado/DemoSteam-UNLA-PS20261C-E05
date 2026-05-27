import { Link, useNavigate, useParams } from "react-router-dom"
import juegos from "../data/juegos"

function CompraJuego({
  agregarABiblioteca,
  biblioteca
}) {
  const { id } = useParams()

  const navigate = useNavigate()

  const juego = juegos.find(
    (juego) => juego.id === Number(id)
  )

  const yaComprado = biblioteca.some(
    (item) => item.id === Number(id)
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

  const confirmarCompra = () => {
    agregarABiblioteca(juego)
    navigate("/biblioteca")
  }

  return (
    <main className="container">
      <Link
        className="volver"
        to={`/juego/${juego.id}`}
      >
        ← Volver al detalle
      </Link>

      <section className="checkout">
        <div>
          <h1>Confirmar compra</h1>

          <p>
            Estás por comprar el siguiente videojuego:
          </p>

          <div className="checkout-juego">
            <img
              src={juego.imagen}
              alt={juego.nombre}
            />

            <div>
              <h2>{juego.nombre}</h2>

              <p>{juego.descripcion}</p>

              <strong>
                {juego.precio === 0
                  ? "Gratis"
                  : `USD $${juego.precio.toFixed(2)}`}
              </strong>
            </div>
          </div>
        </div>

        <div className="resumen-compra">
          <h2>Resumen</h2>

          <p>
            Producto: {juego.nombre}
          </p>

          <p>
            Total:
            {" "}
            <strong>
              {juego.precio === 0
                ? "Gratis"
                : `USD $${juego.precio.toFixed(2)}`}
            </strong>
          </p>

          <p>
            Método de pago:
            Tarjeta simulada
          </p>

          {yaComprado ? (
            <Link
              className="btn"
              to="/biblioteca"
            >
              Ya está en biblioteca
            </Link>
          ) : (
            <button
              className="btn btn-buy"
              onClick={confirmarCompra}
            >
              Confirmar compra
            </button>
          )}
        </div>
      </section>
    </main>
  )
}

export default CompraJuego