import "../styles/GameInfo.css";
import VolchokBackground from "../assets/images/volchok-background.png";
import VolchokBackground2 from "../assets/images/tt.jpg";
import VolchokBackground3 from "../assets/images/rt.jpg";
import { Link, useLocation } from 'react-router-dom';

function InfoCard({ number, text, image }) {
  return (
    <div className={`info-item ${image ? "info-item--image" : ""}`}>
      {number && <div className="info-number">{number}</div>}
      {image && <img src={image} alt="Иллюстрация" className="info-image" />}
      <div className="info-text">{text}</div>
    </div>
  );
}

export function GameInfoSection() {
  const location = useLocation();
  const league = location.pathname.startsWith('/club') ? 'club' : 'open';

  return (
    <section className="game-info-section" style={{backgroundImage: `url(${VolchokBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1c1c1c'}}>
      <h2 className="section-title">Как проходит игра?</h2>
      <div className="game-info-content">
        <div className="game-info-grid">
          <InfoCard number="6" text="знатоков в команде" />
          <InfoCard text="Игры ведутся по правилам Телевизионного клуба Знатоков 1989 года" image={VolchokBackground3} />
          <InfoCard number="1" text="минута на обсуждение" />
          <InfoCard text="Ведущие – звёзды «Что? Где? Когда?»" image={VolchokBackground2} />
          <InfoCard number="20+" text="команд" />
          <InfoCard number="1500" text="рублей с участника" />
        </div>
        <div className="game-info-button">
          <Link to={`/${league}/rules`} className="button button--white">
            Правила игры
          </Link>
        </div>
      </div>
    </section>
  );
}