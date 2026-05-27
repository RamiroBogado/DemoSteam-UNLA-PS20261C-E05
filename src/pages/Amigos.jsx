import { useState } from "react"

const usuariosMock = [
  { id: 1, nombre: "AlexPlayer", estado: "En línea" },
  { id: 2, nombre: "MatiGamer", estado: "Jugando Counter-Strike 2" },
  { id: 3, nombre: "SofiSteam", estado: "Ausente" },
  { id: 4, nombre: "NicoFPS", estado: "En línea" }
]

function Amigos() {
  const [busqueda, setBusqueda] = useState("")
  const [amigos, setAmigos] = useState([])

  const usuariosFiltrados = usuariosMock.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const agregarAmigo = (usuario) => {
    const yaExiste = amigos.some((amigo) => amigo.id === usuario.id)

    if (!yaExiste) {
      setAmigos([...amigos, usuario])
    }
  }

  return (
    <main className="container">
      <h1>Agregar amigos</h1>
      <p>Buscá usuarios y agregalos a tu lista de amigos.</p>

      <input
        className="buscador"
        placeholder="Buscar usuarios..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <section className="amigos-layout">
        <div className="amigos-card">
          <h2>Usuarios encontrados</h2>

          {usuariosFiltrados.map((usuario) => (
            <div className="usuario-item" key={usuario.id}>
              <div>
                <strong>{usuario.nombre}</strong>
                <p>{usuario.estado}</p>
              </div>

              <button
                className="btn btn-buy"
                onClick={() => agregarAmigo(usuario)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>

        <div className="amigos-card">
          <h2>Mis amigos</h2>

          {amigos.length === 0 ? (
            <p className="texto-suave">Todavía no agregaste amigos.</p>
          ) : (
            amigos.map((amigo) => (
              <div className="usuario-item" key={amigo.id}>
                <div>
                  <strong>{amigo.nombre}</strong>
                  <p>{amigo.estado}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default Amigos