const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contactez-moi</h1>
      <p>
        Je suis disponible pour répondre à vos questions ou programmer une séance avec votre loulou 🐾
      </p>

      <div className="contact-options">
        <div className="contact-block">
          <h2>📞 Par téléphone</h2>
          <p>
            Appelez-moi directement au :{" "}
            <a href="tel:+33611810229" className="phone-link">06 11 81 02 29</a>
          </p>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="social-links">
        <h2> Suivez-moi</h2>
        <div className="social-icons">
          <a href="https://www.tiktok.com/@dominetrenov" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/tonprofil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;



  {/* Message */}
        {/* <div className="contact-block">
          <h2>💬 Par message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" required rows={5}></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div> */}