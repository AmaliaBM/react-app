import image1 from "../assets/images/member1.jpg";
import image2 from "../assets/images/member2.jpg";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="container">
      <div className="container-info">
        <h3>COMPANY TAGLINE</h3>
        <p>
          Este proyecto está basado en una página que ofrezca una lista de
          elementos con sus detalles, en la que se puede editar y eliminar los
          productos. ¡Esperamos que os guste!
        </p>
      </div>
      <div className="memebers-conteiner">
        <strong>Team Members</strong>
        <div className="members">
          <div className="amalia">
            <img className="member-image" src={image1}></img>
            <p>Amalia Barrigas</p>
          </div>
          <div className="alba">
            <img className="member-image" src={image2}></img>
            <p>Alba Pérez</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
