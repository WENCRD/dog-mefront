import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (!targetId) return;
  
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${targetId}`);
    } else {
      // ✅ Change l'URL locale pour déclencher useEffect sur HomePage
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("scrollTo", targetId);
      const newUrl = `${location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", newUrl);
  
      const target = document.getElementById(targetId);
      if (target) {
        const yOffset = -150;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
  
      // 👇 Créons un événement personnalisé pour déclencher le scroll manuellement
      window.dispatchEvent(new Event("locationchange"));
    }
  
    setMenuOpen(false);
  };
  
  
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/img/DGlogo.png" alt="Logo Dog&Me" className="logo-navbar" />
          </Link>
        </div>

        {/* Menu */}
        <div className="menu-area">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#promenade" className="nav-link" onClick={handleSmoothScroll}>Promenade</a></li>
            <li><a href="#bilan" className="nav-link" onClick={handleSmoothScroll}>Bilan</a></li>
            <li><a href="#seance" className="nav-link" onClick={handleSmoothScroll}>Séance</a></li>
            <li><a href="#forfait" className="nav-link" onClick={handleSmoothScroll}>Forfait</a></li>
            <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Me contacter</Link></li>
            <li><Link to="/photos" className="nav-link" onClick={closeMenu}>Photos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
