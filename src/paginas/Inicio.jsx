import { Link } from 'react-router-dom';
import AcercaDeNosotros from '../components/AcercaDeNosotros'
import SeccionCarrusel from '../components/SeccionCarrusel';

const Inicio = () => {
  return (
    <section>
      <div className="jumbotron text-center bg-light p-5 fondo">
        <div className="portada" >
          <h1 className="display-4 fw-bold">Bienvenido al Centro de Salud</h1>
          <p className="lead">
            Cuidando de tu salud y bienestar con servicios médicos de alta calidad.
          </p>
          <p>
            ¿Listo para cuidar de tu salud?{' '}
            <Link to='/contacto' className='btn btn-primary btn-lg' >
              ¡Haz tu cita ahora!
            </Link>
          </p>
        </div>
      </div>
      <AcercaDeNosotros />
      <SeccionCarrusel />
    </section>
  );
};

export default Inicio;
