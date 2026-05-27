import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login({ iniciarSesion }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    iniciarSesion({
      nombre: "@usuario",
      email: email
    })

    navigate("/")
  }

  return (
    <main className="container auth-container">
      <section className="auth-card">
        <h1>Iniciar sesión</h1>

        <p>
          Accedé a tu cuenta de Steam MVP.
        </p>

        <form onSubmit={handleSubmit}>
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
            placeholder="Ingresá tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className="btn btn-buy"
            type="submit"
          >
            Iniciar sesión
          </button>

          <p className="auth-link">
  <Link to="/recuperar-password">
    ¿Olvidaste tu contraseña?
  </Link>
</p>
        </form>

        <p className="auth-link">
          ¿No tenés cuenta?

          <Link to="/register">
            Registrate
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login