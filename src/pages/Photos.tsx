import { useEffect, useState } from "react";
import { getGalleryImages } from "../services/api";

const Photos = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    getGalleryImages()
      .then((res) => setImages(res.map((path) => `http://localhost:4000${path}`)))
      .catch(() => console.error("Erreur de chargement des photos"));
  }, []);

  return (
    <div className="main-content">
      <div className="photos-page">
        <h1>Nos loulous en action</h1>
        <p className="photos-subtitle">
          Découvrez quelques moments partagés avec les chiens lors des séances, balades ou jeux.
        </p>

        <div className="photo-grid">
          {images.length === 0 && <p> Aucune image pour le moment.</p>}
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="photo-item"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* Modale avec navigation + crédit */}
        {selectedIndex !== null && (
          <div className="image-modal-overlay" onClick={() => setSelectedIndex(null)}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" onClick={() => setSelectedIndex(null)}>×</button>

              <img
                src={images[selectedIndex]}
                alt={`photo-${selectedIndex}`}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  width: "auto",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)"
                }}
              />

              <p className="modal-credit">📸 Photo : Rébecca</p>

              {images.length > 1 && (
                <>
                  {selectedIndex > 0 && (
                    <button className="modal-nav prev" onClick={() => setSelectedIndex(selectedIndex - 1)}>
                      ←
                    </button>
                  )}
                  {selectedIndex < images.length - 1 && (
                    <button className="modal-nav next" onClick={() => setSelectedIndex(selectedIndex + 1)}>
                      →
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/*  Crédit global */}
        <p className="global-credit">
           Photos réalisées par{" "}
          <a
            href="https://www.instagram.com/cm.visionbyrd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rébecca – Community Manager
          </a>
        </p>
      </div>
    </div>
  );
};

export default Photos;
