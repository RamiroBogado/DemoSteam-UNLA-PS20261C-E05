import { useState } from "react"
import { Link } from "react-router-dom"

function RecuperarPassword() {
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <main className="container auth-container">
      <section className="auth-card">
        <h1>Recuperar contraseña</h1>

        <p>
          Ingresá tu correo para recuperar el acceso.
        </p>

        {enviado ? (
          <div className="mensaje-recuperacion">
            <p>
              Te enviamos instrucciones a:
            </p>

            <strong>{email}</strong>

            <Link className="btn" to="/login">
              Volver al login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Email</label>

            <input
              type="email"
              placeholder="usuario@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              className="btn btn-buy"
              type="submit"
            >
              Enviar instrucciones
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

export default RecuperarPassword