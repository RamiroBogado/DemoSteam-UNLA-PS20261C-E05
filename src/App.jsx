import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

import Catalogo from "./pages/Catalogo"
import DetalleJuego from "./pages/DetalleJuego"
import CompraJuego from "./pages/CompraJuego"
import Biblioteca from "./pages/Biblioteca"
import Login from "./pages/Login"
import Register from "./pages/Register"
import RecuperarPassword from "./pages/RecuperarContrasena"
import Amigos from "./pages/Amigos"

function App() {
  const [biblioteca, setBiblioteca] = useState(() => {
    const bibliotecaGuardada = localStorage.getItem("biblioteca")
    return bibliotecaGuardada ? JSON.parse(bibliotecaGuardada) : []
  })

  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario")
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null
  })

  const [notificaciones] = useState([
    "Oferta de verano disponible",
    "Cyberpunk 2077 está listo para jugar",
    "Nuevo amigo conectado"
  ])

  const iniciarSesion = (usuarioLogueado) => {
    setUsuario(usuarioLogueado)
    localStorage.setItem("usuario", JSON.stringify(usuarioLogueado))
  }

  const cerrarSesion = () => {
    setUsuario(null)
    localStorage.removeItem("usuario")
  }

  const agregarABiblioteca = (juego) => {
    const yaExiste = biblioteca.some((item) => item.id === juego.id)

    if (!yaExiste) {
      const nuevaBiblioteca = [
        ...biblioteca,
        {
          ...juego,
          estadoInstalacion: "Comprado"
        }
      ]

      setBiblioteca(nuevaBiblioteca)
      localStorage.setItem("biblioteca", JSON.stringify(nuevaBiblioteca))
    }
  }

  const instalarJuego = (id) => {
    const bibliotecaInstalando = biblioteca.map((juego) =>
      juego.id === id
        ? { ...juego, estadoInstalacion: "Instalando..." }
        : juego
    )

    setBiblioteca(bibliotecaInstalando)
    localStorage.setItem("biblioteca", JSON.stringify(bibliotecaInstalando))

    setTimeout(() => {
      setBiblioteca((bibliotecaActual) => {
        const bibliotecaInstalada = bibliotecaActual.map((juego) =>
          juego.id === id
            ? { ...juego, estadoInstalacion: "Instalado" }
            : juego
        )

        localStorage.setItem("biblioteca", JSON.stringify(bibliotecaInstalada))
        return bibliotecaInstalada
      })
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

        <Route
          path="/register"
          element={<Register iniciarSesion={iniciarSesion} />}
        />

        <Route
          path="/recuperar-password"
          element={<RecuperarPassword />}
        />

        <Route path="/juego/:id" element={<DetalleJuego />} />

        <Route
          path="/compra/:id"
          element={
            <ProtectedRoute usuario={usuario}>
              <CompraJuego
                agregarABiblioteca={agregarABiblioteca}
                biblioteca={biblioteca}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/biblioteca"
          element={
            <ProtectedRoute usuario={usuario}>
              <Biblioteca
                biblioteca={biblioteca}
                instalarJuego={instalarJuego}
                ejecutarJuego={ejecutarJuego}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/amigos"
          element={
            <ProtectedRoute usuario={usuario}>
              <Amigos />
            </ProtectedRoute>
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