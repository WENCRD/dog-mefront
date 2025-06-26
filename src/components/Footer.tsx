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
   <h2>Réseaux sociaux</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/remy_dogandme/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.4 1.4.3.5.5 1.3.6 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.4 1.4-.5.3-1.3.5-2.5.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.3-.6-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.4-1.4.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.8.2 4.6.5 3.7 1 .8 1.7.3 3 .1 4.4 0 5.6 0 6 0 12s0 6.4.1 7.6c.2 1.4.7 2.7 1.6 3.4.9.6 2.1.9 3.4 1.1C8.3 24 8.7 24 12 24s3.6 0 4.8-.1c1.2-.2 2.5-.5 3.4-1.1.9-.7 1.4-2 1.6-3.4.1-1.2.1-1.6.1-7.6s0-6.4-.1-7.6C22.7.8 21.2.3 19.8.1 18.6 0 18.2 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="18.4" cy="5.6" r="1.4" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@remy_dogandme"  
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg
                className="social-icon"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M168 0h-34v154.8a31.2 31.2 0 1 1-31.2-31.2c1.6 0 3.2.1 4.8.4V90.5a70.8 70.8 0 0 0-4.8-.2A64.8 64.8 0 1 0 168 155V90.7a90.5 90.5 0 0 0 56 19.3V77.7a56.4 56.4 0 0 1-56-56V0Z" />
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
