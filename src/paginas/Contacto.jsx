function Contacto() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensaje enviado correctamente')
  }

  return (
    <section className="bg-light p-5">
      <div className="container">
        <h2 className="text-center">Contáctanos</h2>
        <div className="video p-5" >
          <img src="https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2019/12/Me%CC%81dico-atendiendo-a-una-sen%CC%83ora-de-edad.jpg"
            alt="contacto" width={500} />
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              Estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en ponerte en contacto con nosotros.
            </p>
            <p>¡Tu salud es nuestra prioridad!</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label text-primary">Nombre</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-primary">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label text-primary">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto;
