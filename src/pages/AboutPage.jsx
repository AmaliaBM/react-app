import image1 from "../assets/images/member1.jpg";
import image2 from "../assets/images/member2.jpg";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="container">
      <div> *Descripción del proyecto* </div>
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
