import wave from "../../assets/home_img/wave-logo.png";
import "./about.css";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <section className="section-historia">
        <div className="titulo-historia-container">
          <h1>NUESTRA HOSTORIA</h1>
          <img src={wave} alt="" className="img-ola" />
        </div>
        <div className="div-container-historia">
          <img
            className="img-fundadores"
            src="/about/los-fundadores.jpg"
            alt=""
          />
          <div className="texto-historia-container">
            <p>
              LONG RIDE nació hace 3 años de la mano de 3 amigos que querian
              dedicarse a lo que amaban que era el surf y poder transmitir como
              forma de vida el arte de surfear. Porque como un gran maestro dijo
              espera a la ola correcta y ve el sol al atardecer{" "}
            </p>
            <img
              className="img-sign"
              src="/about/longRideSignature.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section-informacion">
        <h2>INFORMACION</h2>
        <div className="horarios-container">
          <h3>HORARIOS</h3>
          <div className="horario">
            <img
              src="/about/tabla-de-surf.png"
              className="tabla-icono"
              alt=""
            />
            <p>
              Lunes a jueves
              <br /> 10-19
            </p>
          </div>
          <div className="horario">
            <img
              src="/about/tabla-de-surf.png"
              className="tabla-icono"
              alt=""
            />
            <p>
              Viernes y sabados
              <br /> 10-20
            </p>
          </div>
          <div className="horario">
            <img
              src="/about/tabla-de-surf.png"
              className="tabla-icono"
              alt=""
            />
            <p>
              Fechas Especiales
              <br /> 10-14
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
