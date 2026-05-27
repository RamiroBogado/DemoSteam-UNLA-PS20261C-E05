import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register({ iniciarSesion }) {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    iniciarSesion({
      nombre,
      email
    })

    navigate("/")
  }

  return (
    <main className="container auth-container">
      <section className="auth-card">
        <h1>Crear cuenta</h1>

        <p>
          Registrate para acceder a Steam MVP.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Nombre</label>

          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="usuario@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña</label>

          <input
            type="password"
            placeholder="Ingresá una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirmar contraseña</label>

          <input
            type="password"
            placeholder="Repetí la contraseña"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

          <button
            className="btn btn-buy"
            type="submit"
          >
            Registrarse
          </button>
        </form>

        <p className="auth-link">
          ¿Ya tenés cuenta?

          <Link to="/login">
            Iniciar sesión
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Register