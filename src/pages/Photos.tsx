import { useEffect, useState } from "react";
import { getGalleryImages } from "../services/api"; // 👈 API qui récupère les images

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
          {images.length === 0 && <p>📂 Aucune image pour le moment.</p>}
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="photo-item"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Modale image */}
        {selectedImage && (
          <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" onClick={() => setSelectedImage(null)}>×</button>
              <img
  src={selectedImage}
  alt="Agrandissement"
  style={{
    maxWidth: "90vw",
    maxHeight: "90vh",
    width: "auto",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)"
  }}
/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
