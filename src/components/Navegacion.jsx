import { useState } from 'react';
import { Link } from 'react-router-dom'
import { servicios } from '../servicios'

function Navegacion() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleServicios = () => {
    setServiciosOpen(!serviciosOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" >
          Hospital Del Sur
        </Link>
        <button
          className={`navbar-toggler ${navbarOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active text-light" aria-current="page" >
                Inicio
              </Link>
            </li>
            <li className={`nav-item dropdown ${serviciosOpen ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" onClick={toggleServicios} aria-expanded={serviciosOpen}>
                Servicios
              </a>
              <ul className={`dropdown-menu ${serviciosOpen ? 'show' : ''}`}>
                {
                  servicios.map((item) => (
                    <li key={item.id} >
                      <Link className="dropdown-item " to={`/servicio/${item.id}`} >
                        {item.nombre}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/contacto' className="nav-link text-light" >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sobremi' className="nav-link text-light" >
                Sobre Mi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;
