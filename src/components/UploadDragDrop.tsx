import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { uploadImage } from "../services/api";

interface Props {
  onUploadSuccess?: () => void;
}

const UploadDragDrop = ({ onUploadSuccess }: Props) => {
  const { token } = useAuth();
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    if (!token) return;
    setStatus("⏳ Envoi en cours...");
    setError(null);

    try {
      await uploadImage(file, token);
      setStatus("✅ Image envoyée !");
      if (onUploadSuccess) onUploadSuccess();
    } catch {
      setError("❌ Échec de l'envoi.");
    } finally {
      setTimeout(() => {
        setStatus(null);
        setError(null);
      }, 3000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #999",
        padding: "40px",
        borderRadius: "10px",
        background: dragOver ? "#f0f8ff" : "#fafafa",
        textAlign: "center",
        transition: "0.2s",
        cursor: "pointer",
      }}
      onClick={() => document.getElementById("uploadInput")?.click()}
    >
      <p>📁 Glissez une image ici ou cliquez pour choisir un fichier</p>
      <input
        type="file"
        id="uploadInput"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />

      {status && <p style={{ color: "green", marginTop: "10px" }}>{status}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default UploadDragDrop;
