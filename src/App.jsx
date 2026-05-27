import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Catalogo from "./pages/Catalogo"
import DetalleJuego from "./pages/DetalleJuego"
import CompraJuego from "./pages/CompraJuego"
import Biblioteca from "./pages/Biblioteca"

function App() {
  const [biblioteca, setBiblioteca] = useState([])

  const agregarABiblioteca = (juego) => {
    const yaExiste = biblioteca.some((item) => item.id === juego.id)

    if (!yaExiste) {
      setBiblioteca([
        ...biblioteca,
        {
          ...juego,
          estadoInstalacion: "Comprado"
        }
      ])
    }
  }

  const instalarJuego = (id) => {
    setBiblioteca((bibliotecaActual) =>
      bibliotecaActual.map((juego) =>
        juego.id === id
          ? { ...juego, estadoInstalacion: "Instalando..." }
          : juego
      )
    )

    setTimeout(() => {
      setBiblioteca((bibliotecaActual) =>
        bibliotecaActual.map((juego) =>
          juego.id === id
            ? { ...juego, estadoInstalacion: "Instalado" }
            : juego
        )
      )
    }, 2000)
  }

  const ejecutarJuego = (nombreJuego) => {
    alert(`Ejecutando ${nombreJuego}...`)
  }

  return (
    <BrowserRouter>
      <Navbar biblioteca={biblioteca} />

      <Routes>
        <Route path="/" element={<Catalogo />} />

        <Route
          path="/juego/:id"
          element={<DetalleJuego />}
        />

        <Route
          path="/compra/:id"
          element={
            <CompraJuego
              agregarABiblioteca={agregarABiblioteca}
              biblioteca={biblioteca}
            />
          }
        />

        <Route
          path="/biblioteca"
          element={
            <Biblioteca
              biblioteca={biblioteca}
              instalarJuego={instalarJuego}
              ejecutarJuego={ejecutarJuego}
            />
          }
        />
      </Routes>

      <footer className="footer">
        Steam MVP © 2026 - Universidad Nacional de Lanús
      </footer>
    </BrowserRouter>
  )
}

export default App