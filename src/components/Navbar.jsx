import { Link } from "react-router-dom"

function Navbar({ biblioteca }) {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        STEAM MVP
      </Link>

      <div className="nav-links">
        <Link to="/">Tienda</Link>
        <Link to="/biblioteca">
          Biblioteca ({biblioteca.length})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar