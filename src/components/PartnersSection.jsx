import "../styles/PartnersSection.css";
import EvoLogo from '../assets/images/partners/evo.svg';
import PSBoxLogo from '../assets/images/partners/PSBox.svg';
import SmileLogo from '../assets/images/partners/Smile.svg';
import EmpranaLogo from '../assets/images/partners/Эмпрана.svg';
import LemonGuideLogo from '../assets/images/partners/ЛемонГайд.svg';
import VovesGolosLogo from '../assets/images/partners/ВоВесьГолос.png';
import ChGK from '../assets/images/partners/Приложение ЧГК-онлайн.jpeg';

export function PartnersSection() {
  // Массив партнеров - здесь вы можете добавить реальные данные
  const partners = [
    {
      id: 4,
      name: "Эмпрана",
      logo: EmpranaLogo,
      link: "http://Emprana.ru"
    },
    {
      id: 3,
      name: "Smile",
      logo: SmileLogo,
      link: "http://Smile-smile.ru"
    },
    {
      id: 2,
      name: "P.S.BOX",
      logo: PSBoxLogo,
      link: "http://Ps-box.ru"
    },
    {
      id: 6,
      name: "Во весь голос",
      logo: VovesGolosLogo,
      link: "https://t.me/golosbooks"
    },
    {
      id: 5,
      name: "Лемон гайд",
      logo: LemonGuideLogo,
      link: "http://lemonguide.ru"
    },
    {
      id: 1,
      name: "EVO Impressions",
      logo: EvoLogo,
      link: "http://Evoi.ru"
    }
  ];

  const firstRow = partners.slice(0, 3);
  const secondRow = partners.slice(3);

  return (
    <section className="partners-section">
      <div className="chgk-container">
        <a href="https://gift.chgk.online/" target="_blank" rel="noopener noreferrer">
          <img src={ChGK} alt="ЧГК-онлайн" className="chgk-logo" />
        </a>
      </div>
      <h2 className="section-title">Наши партнеры</h2>
      <div className="partners-container">
        <div className="partners-row partners-row--first">
          {firstRow.map((partner) => (
            <div key={partner.id} className="partner-cell">
              <a 
                href={partner.link} 
                className="partner-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="partners-row partners-row--second">
          {secondRow.map((partner) => (
            <div key={partner.id} className="partner-cell">
              <a 
                href={partner.link} 
                className="partner-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}