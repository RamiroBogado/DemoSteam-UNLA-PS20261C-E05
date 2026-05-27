import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"

const juegos = [
  {
    id: 1,
    nombre: "Cyberpunk 2077",
    precio: 59.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    descripcion: "RPG futurista de mundo abierto."
  },
  {
    id: 2,
    nombre: "Elden Ring",
    precio: 49.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    descripcion: "RPG de acción y fantasía oscura."
  },
  {
    id: 3,
    nombre: "Counter-Strike 2",
    precio: 0.00,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    descripcion: "Shooter competitivo multijugador."
  },
  {
    id: 4,
    nombre: "Red Dead Redemption 2",
    precio: 39.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    descripcion: "Aventura western de mundo abierto."
  },
  {
    id: 5,
    nombre: "EA SPORTS FC 25",
    precio: 69.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",
    descripcion: "Simulador de fútbol competitivo."
  },
  {
    id: 6,
    nombre: "GTA V",
    precio: 29.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    descripcion: "Acción y crimen en mundo abierto."
  },
  {
    id: 7,
    nombre: "Hogwarts Legacy",
    precio: 59.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
    descripcion: "RPG ambientado en el universo Harry Potter."
  },
  {
    id: 8,
    nombre: "Resident Evil 4",
    precio: 39.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
    descripcion: "Remake del clásico survival horror."
  },
  {
    id: 9,
    nombre: "The Witcher 3",
    precio: 19.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    descripcion: "RPG de fantasía épica."
  },
  {
    id: 10,
    nombre: "Forza Horizon 5",
    precio: 59.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
    descripcion: "Carreras arcade en mundo abierto."
  },
  {
    id: 11,
    nombre: "Call of Duty",
    precio: 69.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
    descripcion: "Shooter militar competitivo."
  },
  {
    id: 12,
    nombre: "Palworld",
    precio: 29.99,
    imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
    descripcion: "Supervivencia y criaturas estilo sandbox."
  }
]

function Navbar() {
  return (
    <nav className="navbar">
      <h2>STEAM MVP</h2>

      <div>
        <Link to="/">Tienda</Link>
        <Link to="/biblioteca">Biblioteca</Link>
      </div>
    </nav>
  )
}

function Catalogo() {
  return (
    <main className="container">
      <h1>Catálogo de videojuegos</h1>
      <p>Explorá los juegos disponibles en la tienda.</p>

      <div className="grid-juegos">
        {juegos.map((juego) => (
          <div className="card-juego" key={juego.id}>
            <img src={juego.imagen} alt={juego.nombre} />

            <div className="card-info">
              <h3>{juego.nombre}</h3>
              <p>{juego.descripcion}</p>

              <strong>
                {juego.precio === 0
                  ? "Gratis"
                  : `USD $${juego.precio.toFixed(2)}`}
              </strong>

              <Link className="btn" to={`/juego/${juego.id}`}>
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

function DetalleJuego() {
  const { id } = useParams()
  const juego = juegos.find((juego) => juego.id === Number(id))

  if (!juego) {
    return (
      <main className="container">
        <h1>Juego no encontrado</h1>
        <Link className="btn" to="/">Volver al catálogo</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <Link className="volver" to="/">← Volver al catálogo</Link>

      <section className="detalle">
        <img src={juego.imagen} alt={juego.nombre} />

        <div>
          <h1>{juego.nombre}</h1>
          <p>{juego.descripcion}</p>

          <h3>
            {juego.precio === 0
              ? "Gratis"
              : `USD $${juego.precio.toFixed(2)}`}
          </h3>

          <p className="detalle-texto">
            Disponible en Steam MVP. Este videojuego puede agregarse al carrito
            para continuar con el proceso de compra.
          </p>

          <button className="btn">Comprar</button>
        </div>
      </section>
    </main>
  )
}

function Biblioteca() {
  return (
    <main className="container">
      <h1>Biblioteca</h1>
      <p>Todavía no hay juegos comprados.</p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/juego/:id" element={<DetalleJuego />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App