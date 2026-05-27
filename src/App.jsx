import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Catalogo from "./pages/Catalogo"
import DetalleJuego from "./pages/DetalleJuego"
import CompraJuego from "./pages/CompraJuego"
import Biblioteca from "./pages/Biblioteca"

import Login from "./pages/Login"
import Register from "./pages/Register"
import RecuperarPassword from "./pages/RecuperarContrasena"
import Amigos from "./pages/Amigos"

function App() {
  const [biblioteca, setBiblioteca] = useState([])
  const [usuario, setUsuario] = useState(null)

  const [notificaciones] = useState([
    "Oferta de verano disponible",
    "Cyberpunk 2077 está listo para jugar",
    "Nuevo amigo conectado"
  ])

  const iniciarSesion = (usuarioLogueado) => {
    setUsuario(usuarioLogueado)
  }

  const cerrarSesion = () => {
    setUsuario(null)
  }

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
      <Navbar
        biblioteca={biblioteca}
        usuario={usuario}
        cerrarSesion={cerrarSesion}
        notificaciones={notificaciones}
      />

      <Routes>
        <Route path="/" element={<Catalogo />} />

        <Route path="/login" element={<Login iniciarSesion={iniciarSesion} />} />

        <Route path="/register" element={<Register iniciarSesion={iniciarSesion} />} />

        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        
        <Route path="/amigos" element={<Amigos />} />

        <Route path="/juego/:id" element={<DetalleJuego />} />

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