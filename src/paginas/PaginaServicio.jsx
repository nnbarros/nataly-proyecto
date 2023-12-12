import { Link, useParams } from "react-router-dom";
import { servicios } from '../servicios';

function PaginaServicio() {
  const { nro } = useParams();
  const servicio = servicios.find((item) => item.id == nro);

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-primary">{servicio.nombre}</h2>
          <p className="lead">{servicio.descripcion}</p>
          <div>
            <h3>Ubicacion</h3>
            <p>{servicio.ubicacion}</p>
            <Link to='/contacto' className="btn btn-primary mb-4 fs-4" >
              Crear Cita
            </Link>
          </div>
          <img className="img-fluid mb-4" src={servicio.urlImg} alt={servicio.nombre} />
        </div>

        <div className="col-md-4">
          <div className="card bg-light p-3">
            <h3 className="text-primary">Horas de Atención</h3>
            <p>{servicio.horasAtencion}</p>
            <h3 className="text-primary">Días de Atención</h3>
            <p>{servicio.diasAtencion}</p>
          </div>

          <div className="card bg-light p-3 mt-3">
            <h3 className="text-primary">Costo del servicio</h3>
            <p>{servicio.costo}</p>
            <h3 className="text-primary">Duracion</h3>
            <p>{servicio.duracion}</p>
          </div>

          <div className="card bg-light p-3 mt-3">
            <h3 className="text-primary">Requisitos Previos</h3>
            <p>{servicio.requisitos}</p>
          </div>

          <div className="card bg-light p-3 mt-3">
            <h3 className="text-primary">Especialistas</h3>
            <ul className="list-unstyled">
              {servicio.doctores.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PaginaServicio;
