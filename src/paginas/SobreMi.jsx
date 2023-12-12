import foto from '../img/foto.jpeg'

function SobreMi() {
  return (
    <section className="bg-light p-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src={foto}
              alt="Mi Foto"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <h3>Mi Nombre</h3>
            <p>Nathaly Noemi Barros </p>
            <h3>Edad</h3>
            <p>21 años</p>
            <h3>Descripción</h3>
            <p>
              Soy una persona amable, competitiva y lógica, actualmente cursando mi tercer año de estudios en la Universidad Mayor de San Andrés (UMSA). Me apasiona profundizar en el conocimiento y enfrentar desafíos académicos que estimulen mi crecimiento intelectual. Mi enfoque en la lógica y la resolución de problemas me ha permitido destacar en mis estudios, siempre buscando mejorar y aprender de cada experiencia.
            </p>
            <h3>Habilidades</h3>
            <ul>
              <li>Desarrollo Frontend</li>
              <li>React.js</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Git</li>
            </ul>
            <h3>Redes Sociales</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              {/* Agrega más enlaces según sea necesario */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
