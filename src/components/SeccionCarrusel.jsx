import { useState } from 'react';

function SeccionCarrusel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade p-5">
      <div className="carousel-inner container">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img
            src="https://i0.wp.com/doctorenusa.com/wp-content/uploads/2022/05/Doctor-atendiendo-paciente-2048x1366-doctor-en-usa.jpg?fit=797%2C532&ssl=1"
            className="d-block w-100"
            alt="doctor"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img
            src="https://ichef.bbci.co.uk/news/1024/branded_mundo/3318/live/e7cf01d0-8272-11ee-ba54-c11adb7653c8.jpg"
            className="d-block w-100"
            alt="hospital"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img
            src="https://www.unitecoprofesional.es/blog/wp-content/uploads/2021/08/Medico-paciente.jpg"
            className="d-block w-100"
            alt="paciente"
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next text-dark" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SeccionCarrusel;
