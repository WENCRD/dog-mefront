import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInSection from "../components/scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getGalleryImages } from "../services/api";
import "../HomePage.css";

const HomePage = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const closeModal = () => setModalImage(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [modalPrestation, setModalPrestation] = useState<string | null>(null);
  const openPrestationModal = (type: string) => {
    setModalPrestation(type);
    setActiveCard(type); // force le visuel actif quand on clique
  };  
  const closePrestationModal = () => {
    setModalPrestation(null);
  };

  const [dynamicImages, setDynamicImages] = useState<string[]>([]);
  useEffect(() => {
    getGalleryImages()
      .then(setDynamicImages)
      .catch(() => console.error("Erreur chargement images"));
  }, []);

  const [activeCard, setActiveCard] = useState<string | null>(null);
 
  
  useEffect(() => {
    const handleCustomScroll = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const targetId = searchParams.get("scrollTo");
  
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          const yOffset = -150;
          const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
  
          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveCard(targetId);
        }
      }
    };
  
    window.addEventListener("locationchange", handleCustomScroll);
    handleCustomScroll(); 
  
    return () => window.removeEventListener("locationchange", handleCustomScroll);
  }, []);

  const handleClick = () => {
  if (window.location.pathname === "/") {
    const params = new URLSearchParams(window.location.search);
    params.set("scrollTo", "services");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
    window.dispatchEvent(new Event("locationchange"));
  } else {
    navigate("/services");
  }
};
  
  

 const images = dynamicImages.length > 0 ? dynamicImages : [
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
    "/img/dogd.jpeg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <header className="img">
        <div className="hero-content">
          <h1 className="head-title">ÉDUCATEUR CANIN</h1>
          <p className="hero-description">
            Offrez à votre chien une éducation personnalisée et bienveillante.
          </p>
          <div className="button-container">
            <button className="btnhp"onClick={handleClick}>
              LES PRESTATIONS
            </button>
            <button className="btnhp" onClick={() => navigate("/contact")}>
              ME CONTACTER
            </button>
          </div>
        </div>
      </header>

     <div className="floating-buttons">
  {/* Téléphone */}
  <a href="tel:+33612345678" className="floating-btn" aria-label="Téléphoner">
    <i className="fas fa-phone"></i>
  </a>

  {/* TikTok */}
  <a href="https://www.tiktok.com/@remy_dogandme" target="_blank" className="floating-btn" aria-label="TikTok">
    <i className="fab fa-tiktok"></i>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/remy_dogandme/" target="_blank" className="floating-btn" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
</div>


      {/* Navigation – à personnaliser */}
      <nav className="navbare">
        <div className="section-nav">          
        </div>
      </nav>

      {/* === Galerie Swiper === */}
      <section className="section-container gallery-slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={4}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: Math.min(4, images.length) },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                onClick={() => setModalImage(img)}
                className="swiper-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {modalImage && (
          <div className="image-modal" onClick={closeModal}>
            <img src={modalImage} alt="Aperçu plein écran" />
          </div>
        )}
      </section>

      <FadeInSection>
        <section className="section-container">
          <div className="content-wrapper">
            <img className="img-left" src="/img/Remy.jpg" alt="Pourquoi choisir l'éducation canine" />
            <div className="text-right">
              <h2>Qui suis-je/ Mon parcours</h2>
              <p>
                Bonjour et bienvenue, je m'appelle Rémy, âgé de 33 ans, amoureux des animaux depuis tout petit.
                <br />
                J'ai décidé en 2022 de devenir éducateur canin comportementaliste, formé par Chloé Fesch chez
                <a href="https://naturedechien.fr" target="_blank" rel="noopener noreferrer">
                  <strong> Nature de Chien</strong>
                </a> à Toulouse.
                <br />
                Afin de me perfectionner sur certaines notions, j'ai suivi un stage chez mon collègue Florian, fondateur de
                <a href="https://paws-up.fr" target="_blank" rel="noopener noreferrer">
                  <strong> Paws Up</strong>
                </a>.
                <br />
                Avant cette remise en question qui a déclenché ma reconversion, j'ai réalisé plusieurs petits boulots en intérim
                et j'ai été responsable magasin dans la vente de pièces auto pendant sept ans.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section-container">
          <div className="two-columns">
            <div className="image-block">
              <img src="/img/dg.jpeg" alt="Chien éducatif 1" className="side-image" />
              <h2>ULKA</h2>
              <p className="image-caption">
                jeune Husky de 15 mois très dynamique toujours à la recherche de nouveaux amis "chiens comme humains",
                participe à certaines séances individuelles ou lors des sessions de cani-randos.
              </p>
            </div>
            <div className="image-block">
              <img src="/img/myst.jpeg" alt="Chien éducatif 2" className="side-image" />
              <h2>MYSTIQUE</h2>
              <p className="image-caption">
                berger blanc suisse de 8 ans, quoi dire de plus que si aujourd'hui j'ai pris la decision d'être éducateur canin
                c'est grâce à elle ; participe très rarement aux séances individuelles et de temps en temps aux cani-randos, tout dépend des circonstances.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
      <section className="section-container">
        <h2  id="services">LES PRESTATIONS</h2>
  <div className="content-wrapper prestations-grid">
    {/* PROMENADE */}
    <div
      className={`prestation-card${activeCard === "promenade" ? " active" : ""}`}
      id="promenade"
      onClick={() => {
        setActiveCard("promenade");
        openPrestationModal("promenade");
      }}
      style={{ cursor: "pointer" }}
    >
      <h3>🚶‍♂️ Promenade pédagogique</h3>
      <p>
        Durée : 1h - 1h30<br />
        Une sortie ludique incluant jeux et interactions. Idéal pour les journées chargées.
        <br />
        <em>(Ne remplace pas une séance éducative.)</em>
      </p>
      <p className="prix">30€</p> 
      <button
        className="btn-en-savoir-plus"
        onClick={(e) => {
          e.stopPropagation(); // évite le double déclenchement
          openPrestationModal("promenade");
        }}
      >
        <i className="fas fa-paw"></i> En savoir plus</button>
    </div>

    {/* BILAN */}
    <div
      className={`prestation-card${activeCard === "bilan" ? " active" : ""}`}
      id="bilan"
      onClick={() => {
        setActiveCard("bilan");
        openPrestationModal("bilan");
      }}
      style={{ cursor: "pointer" }}
    >
      <h3>🧠 Bilan comportemental</h3>
      <p>
        Durée : ~2h, chez vous.
        <br />
        On fait connaissance, on identifie les besoins, et on pose les bases d’une méthode adaptée à votre binôme.
      </p>
      <p className="prix">100€</p>
      <button
        className="btn-en-savoir-plus"
        onClick={(e) => {
          e.stopPropagation();
          openPrestationModal("bilan");
        }}
      >
        <i className="fas fa-paw"></i> En savoir plus
      </button>
    </div>

    {/* INDIVIDUELLE */}
    <div
      className={`prestation-card${activeCard === "seance" ? " active" : ""}`}
      id="seance"
      onClick={() => {
        setActiveCard("seance");
        openPrestationModal("seance");
      }}
      style={{ cursor: "pointer" }}
    >
      <h3>🎯 Séance individuelle</h3>
      <p>
        Travail éducatif ciblé pour aider votre chien à s’adapter sereinement à son environnement.
      </p>
      <p className="prix">50€</p>
      <button
        className="btn-en-savoir-plus"
        onClick={(e) => {
          e.stopPropagation();
          openPrestationModal("seance");
        }}
      >
        <i className="fas fa-paw"></i> En savoir plus
      </button>
    </div>

    {/* FORFAIT */}
    <div
      className={`prestation-card${activeCard === "forfait" ? " active" : ""}`}
      id="forfait"
      onClick={() => {
        setActiveCard("forfait");
        openPrestationModal("forfait");
      }}
      style={{ cursor: "pointer" }}
    >
      <h3>📦 Forfait 4 séances</h3>
      <p>
        4 séances individuelles espacées, pour travailler progressivement sur plusieurs problématiques.
      </p>
      <p className="prix">150€</p>
      <button
        className="btn-en-savoir-plus"
        onClick={(e) => {
          e.stopPropagation();
          openPrestationModal("forfait");
        }}
      >
        <i className="fas fa-paw"></i> En savoir plus
      </button>
    </div>
  </div>
</section>

      </FadeInSection>

      <FadeInSection>
        <section className="section-container temoignages-section">
          <div className="temoignages-inner">
            <div className="google-reviews-widget">
              <div
                className="elfsight-app-32400789-c253-4459-985e-55f3233ae3ae"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
      <section className="section-container contact-cta">
  <div className="content-wrapper">
    <h2>💬 Une question ? Un doute ?</h2>
    <p>N’hésitez pas à me contacter, je suis là pour vous accompagner avec votre loulou 🐾</p>
    <a href="/contact" className="cta-button">Me contacter</a>
  </div>
</section>

      </FadeInSection>

  {isVisible && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="scroll-to-top visible"
    aria-label="Retour en haut"
  >
    <i className="fas fa-arrow-up" aria-hidden="true"></i>
  </button>
)}



{modalPrestation && (
  <div className="modal-overlay" onClick={closePrestationModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={closePrestationModal}>×</button>

      {modalPrestation === "promenade" && (
        <div>
          <h2>🚶‍♂️ Promenade pédagogique</h2>
          <img src="/img/BC.jpg" alt="Promenade pédagogique" className="modal-img" />
          <p>
            Une balade éducative pour que votre loulou 🐶 puisse se défouler et apprendre à son rythme. On combine jeux, marche en laisse, socialisation et rappel, toujours dans la bonne humeur !<br /><br />
            <strong>Durée :</strong> 1h à 1h30<br />
            <strong>Tarif :</strong> 30€<br />
          </p>
          <a href="tel:+33611810229" className="btn-contact-modal">📞 Me contacter</a>
        </div>
      )}

      {modalPrestation === "bilan" && (
        <div>
          <h2>🧠 Bilan comportemental</h2>
          <img src="/img/BL.jpg" alt="Bilan comportemental" className="modal-img" />
          <p>
            Un moment d’échange à la maison pour mieux comprendre votre loulou, son quotidien, ses émotions et ses besoins. On établit ensemble une base éducative solide adaptée à votre binôme 🐾<br /><br />
            <strong>Durée :</strong> environ 2h<br />
            <strong>Tarif :</strong> 100€<br />
          </p>
          <a href="tel:+33611810229" className="btn-contact-modal">📞 Me contacter</a>
        </div>
      )}

      {modalPrestation === "seance" && (
        <div>
          <h2>🎯 Séance individuelle</h2>
          <img src="/img/PP.jpg" alt="Séance individuelle" className="modal-img" />
          <p>
            Une séance personnalisée pour travailler ce qui pose souci : rappel, marche en laisse, aboiements, gestion des émotions... Le tout en douceur et avec le sourire 🐕<br /><br />
            <strong>Durée :</strong> ~1h<br />
            <strong>Tarif :</strong> 50€<br />
          </p>
          <a href="tel:+33611810229" className="btn-contact-modal">📞 Me contacter</a>
        </div>
      )}

      {modalPrestation === "forfait" && (
        <div>
          <h2>📦 Forfait 4 séances</h2>
          <img src="/img/4F.jpg" alt="Forfait 4 séances" className="modal-img" />
          <p>
            Pour prendre le temps d’apprendre en confiance. 4 séances progressives pour accompagner votre loulou sur le long terme, et renforcer votre complicité étape par étape 🐶💛<br /><br />
            <strong>Durée :</strong> 4 séances individuelles<br />
            <strong>Tarif :</strong> 150€<br />
          </p>
          <a href="tel:+33611810229" className="btn-contact-modal">📞 Me contacter</a>
        </div>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default HomePage;
