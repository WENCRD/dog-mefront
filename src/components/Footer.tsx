import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* À propos */}
        <div className="footer-section">
          <h2>À propos</h2>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/Contact">Me contacter</Link></li>
            <li><Link to="/Pro">Professionnels</Link></li>
          </ul>
        </div>

        {/* Informations */}
        <div className="footer-section">
          <h2>Informations</h2>
          <ul>
            <li><Link to="/privacy-policy">Politique RGPD</Link></li>
            <li><Link to="/legal-notice">Mentions légales</Link></li>
            <li><Link to="/terms">Conditions générales</Link></li>

          </ul>
        </div>

        {/* Newsletter */}
        {/* <div className="footer-section">
          <h2>Actualités</h2>
          <p>Inscrivez-vous à notre newsletter :</p>
          <form>
            <input type="email" placeholder="Votre email" required />
            <button type="submit">S'inscrire</button>
          </form>
        </div> */}

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <div className="social-icons">
            <h2>Informations</h2>
            <a href="https://www.instagram.com/remy_dogandme/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.4 1.4.3.5.5 1.3.6 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.4 1.4-.5.3-1.3.5-2.5.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.3-.6-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.4-1.4.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.8.2 4.6.5 3.7 1 .8 1.7.3 3 .1 4.4 0 5.6 0 6 0 12s0 6.4.1 7.6c.2 1.4.7 2.7 1.6 3.4.9.6 2.1.9 3.4 1.1C8.3 24 8.7 24 12 24s3.6 0 4.8-.1c1.2-.2 2.5-.5 3.4-1.1.9-.7 1.4-2 1.6-3.4.1-1.2.1-1.6.1-7.6s0-6.4-.1-7.6C22.7.8 21.2.3 19.8.1 18.6 0 18.2 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="18.4" cy="5.6" r="1.4" />
              </svg>
            </a>

            <a href="https://www.facebook.com/remydogandme/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.3v21.4C0 23.4.6 24 1.325 24H12.82V14.7h-3.1v-3.6h3.1V8.3c0-3 1.8-4.6 4.4-4.6 1.3 0 2.6.1 2.9.2v3.2H17c-1.3 0-1.6.6-1.6 1.6v2h3.2l-.4 3.6h-2.8V24h5.6c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
          </div>

        </div>
        {/* Réseaux sociaux */}
        {/* <div className="footer-section">
          <img src="/img/DGlogo.png" alt="Logo" className="logo" /> */}
        {/* <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/insta.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/face.png" alt="Facebook" />
            </a>
          </div> */}
        {/* </div> */}
      </div>

      <div className="footer-bottom">
        <p>© 2025 Dog&Me. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
