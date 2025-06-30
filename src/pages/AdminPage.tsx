import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { getGalleryImages, deleteImage } from "../services/api";
import UploadDragDrop from "../components/UploadDragDrop";

type ImageData = {
  url: string;
  public_id: string;
};

const DashboardAdmin = () => {
  const { token } = useAuth();
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchImages = async () => {
    try {
      const imgs = await getGalleryImages();
      setImages(imgs);
    } catch {
      setError("Erreur lors du chargement des images.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (publicId: string) => {
    if (!token) return;

    const confirmDelete = window.confirm("Supprimer cette image ?");
    if (!confirmDelete) return;

    try {
      await deleteImage(publicId, token);
      setSuccess("Image supprimée.");
      setError("");
      await fetchImages(); // Refresh après suppression
    } catch {
      setError("Erreur lors de la suppression.");
      setSuccess("");
    }
  };

  return (
    <div
      className="admin-dashboard"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center" }}>Gestion des images</h1>

      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <UploadDragDrop onUploadSuccess={fetchImages} />
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
      </div>

      <div
        className="gallery-grid"
        style={{
          display: "grid",
          gap: "12px",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}
          >
            <img
              src={img.url}
              alt={`image-${index}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <button
              onClick={() => handleDelete(img.public_id)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "4px 8px",
                fontSize: "14px",
              }}
              title="Supprimer"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardAdmin;
