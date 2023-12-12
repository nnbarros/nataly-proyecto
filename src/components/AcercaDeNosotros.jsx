const AcercaDeNosotros = () => {
  return (
    <section className="container mt-5 p-4 bg-light border rounded">
      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <div className="video" >
          <iframe
            className="embed-responsive-item"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r041UipVzD0?si=tci-qTNqB9Wt6E4p"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h2 className="mb-4">Acerca de Nosotros</h2>
      <p>
        Somos el Hospital Del Sur, comprometidos con brindar atención médica de calidad y centrada en el paciente.
        Nuestra misión es proporcionar servicios médicos accesibles y compasivos para mejorar la salud y el bienestar de nuestra comunidad.
      </p>
      <p>
        En el Hospital Del Sur, contamos con un equipo de profesionales altamente calificados y apasionados que trabajan juntos para ofrecer un enfoque integral de atención médica.
        Nos esforzamos por mantenernos actualizados con los avances médicos y tecnológicos para garantizar que nuestros pacientes reciban la mejor atención posible.
      </p>
      <p>
        Valoramos la confianza que nuestros pacientes depositan en nosotros y estamos dedicados a proporcionar un ambiente acogedor y de apoyo para su atención médica.
      </p>
      <p>
        Gracias por elegirnos como su proveedor de atención médica. Estamos aquí para cuidar de usted y su familia.
      </p>
    </section>
  );
};

export default AcercaDeNosotros;
