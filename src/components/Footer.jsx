
const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contacto</h4>
            <p>Dirección: Calle Principal #123, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@hospitaldelsur.com</p>
          </div>
          <div className="col-md-6">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-light">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-light">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 Hospital Del Sur. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
